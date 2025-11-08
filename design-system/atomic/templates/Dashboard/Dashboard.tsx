import React from 'react';
import { Header, Sidebar, Dashboard } from '../../organisms';
import { DashboardTemplateProps } from './Dashboard.types';
import { cn } from '../../../utils/cn';

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
    children,
    showSidebar = true,
    showHeader = true,
    sidebarItems = [
        { id: 'overview', label: 'Resumen', href: '/dashboard' },
        { id: 'cases', label: 'Casos', href: '/cases' },
        { id: 'clients', label: 'Clientes', href: '/clients' },
        { id: 'reports', label: 'Reportes', href: '/reports' },
        { id: 'settings', label: 'Configuración', href: '/settings' }
    ],
    headerProps,
    sidebarProps,
    className,
    ...props
}) => {
    return (
        <div className={cn('min-h-screen bg-gray-50', className)} {...props}>
            {/* Header */}
            {showHeader && (
                <Header
                    {...headerProps}
                    className="bg-white shadow-sm border-b"
                />
            )}

            <div className="flex">
                {/* Sidebar */}
                {showSidebar && (
                    <Sidebar
                        items={sidebarItems}
                        {...sidebarProps}
                        className="w-64 bg-white shadow-sm min-h-screen"
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {children || (
                        <Dashboard
                            title="Dashboard"
                            subtitle="Resumen de tu actividad"
                            widgets={[
                                {
                                    id: 'total-cases',
                                    title: 'Total de Casos',
                                    size: 'small',
                                    type: 'metric',
                                    content: (
                                        <div className="flex flex-col items-center text-center">
                                            <div className="text-3xl font-bold text-primary-600">156</div>
                                            <div className="text-sm text-gray-600">Casos Activos</div>
                                            <div className="flex items-center text-sm text-success-600 mt-1">
                                                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                                                    <polyline points="17,6 23,6 23,12" />
                                                </svg>
                                                +12% este mes
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    id: 'success-rate',
                                    title: 'Tasa de Éxito',
                                    size: 'small',
                                    type: 'metric',
                                    content: (
                                        <div className="flex flex-col items-center text-center">
                                            <div className="text-3xl font-bold text-success-600">94%</div>
                                            <div className="text-sm text-gray-600">Casos Ganados</div>
                                            <div className="flex items-center text-sm text-success-600 mt-1">
                                                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                                                    <polyline points="17,6 23,6 23,12" />
                                                </svg>
                                                +3% este mes
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    id: 'revenue',
                                    title: 'Ingresos',
                                    size: 'small',
                                    type: 'metric',
                                    content: (
                                        <div className="flex flex-col items-center text-center">
                                            <div className="text-3xl font-bold text-primary-600">€2.1M</div>
                                            <div className="text-sm text-gray-600">Compensaciones</div>
                                            <div className="flex items-center text-sm text-success-600 mt-1">
                                                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
                                                    <polyline points="17,6 23,6 23,12" />
                                                </svg>
                                                +18% este mes
                                            </div>
                                        </div>
                                    )
                                }
                            ]}
                        />
                    )}
                </main>
            </div>
        </div>
    );
};

export default DashboardTemplate;