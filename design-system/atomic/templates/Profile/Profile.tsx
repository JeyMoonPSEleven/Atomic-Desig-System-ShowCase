import React from 'react';
import { ProfileTemplateProps } from './Profile.types';
import { cn } from '../../../utils/cn';
import { Heading, Text } from '../../atoms';
import { Footer } from '../../organisms/Footer';

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
    children,
    showSidebar = true,
    showHeader = true,
    showFooter = true,
    headerTitle = 'Mi Perfil',
    headerSubtitle = 'Gestiona tu información personal',
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
                <div className="flex-1 p-lg">
                    {children}
                </div>
                {showSidebar && (
                    <aside className="w-64 bg-background-secondary border-l border-border p-md">
                        {sidebarContent}
                    </aside>
                )}
            </main>

            {showFooter && <Footer />}
        </div>
    );
};

export default ProfileTemplate;
