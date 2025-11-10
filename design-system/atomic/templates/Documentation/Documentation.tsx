import React from 'react';
import { DocumentationTemplateProps } from './Documentation.types';
import { cn } from '../../../utils/cn';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

export const DocumentationTemplate = React.memo<DocumentationTemplateProps>(({
    children,
    showSidebar = true,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Documentación',
    headerSubtitle = 'Guías y referencias',
    sidebarContent,
    className,
}) => {
    return (
        <div className={cn('min-h-screen flex flex-col bg-background', className)}>
            {showHeader && (
                <header className="bg-background border-b border-border py-lg px-md">
                    <div className="container mx-auto">
                        <Heading level={1} className="text-foreground mb-sm">{headerTitle}</Heading>
                        <Text variant="body" color="secondary">{headerSubtitle}</Text>
                    </div>
                </header>
            )}

            <main className="flex-1 flex">
                {showSidebar && (
                    <aside className="w-64 bg-background-secondary border-r border-border p-md">
                        {sidebarContent}
                    </aside>
                )}
                <div className="flex-1 p-lg">
                    {children}
                </div>
            </main>

            {showFooter && <Footer />}
        </div>
    );
});

DocumentationTemplate.displayName = 'DocumentationTemplate';
