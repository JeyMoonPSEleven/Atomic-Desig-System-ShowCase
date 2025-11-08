import React from 'react';
import { AdminTemplateProps } from './Admin.types';
import { cn } from '../../../utils/cn';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

export const AdminTemplate = React.memo<AdminTemplateProps>(({
    children,
    showSidebar = true,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Panel de Administración',
    headerSubtitle = 'Gestiona tu sistema',
    sidebarContent,
    className,
}) => {
    return (
        <div className={cn('min-h-screen flex flex-col bg-background', className)}>
            {showHeader && (
                <header className="bg-background border-b border-border py-lg px-md">
                    <div className="container mx-auto">
                        <Heading level={1} className="text-text-primary mb-sm">{headerTitle}</Heading>
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

AdminTemplate.displayName = 'AdminTemplate';
