import React from 'react';
import { BlogTemplateProps } from './Blog.types';
import { cn } from '../../../utils/cn';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

export const BlogTemplate = React.memo<BlogTemplateProps>(({
    children,
    showSidebar = false,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Blog',
    headerSubtitle = 'Artículos y noticias',
    className,
}) => {
    return (
        <div className={cn('min-h-screen flex flex-col bg-background', className)}>
            {showHeader && (
                <header className="bg-background border-b border-border py-xl px-md">
                    <div className="container mx-auto text-center">
                        <Heading level={1} className="text-text-primary mb-sm">{headerTitle}</Heading>
                        <Text variant="body" color="secondary">{headerSubtitle}</Text>
                    </div>
                </header>
            )}

            <main className="flex-1 container mx-auto px-md py-xl max-w-4xl">
                {children}
            </main>

            {showFooter && <Footer />}
        </div>
    );
});

BlogTemplate.displayName = 'BlogTemplate';
