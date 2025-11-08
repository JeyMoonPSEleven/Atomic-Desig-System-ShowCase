// src/design-system/atomic/molecules/Tabs/Tabs.types.ts
import React from 'react';

export type TabsVariant = 'default' | 'pills' | 'underline';
export type TabsSize = 'small' | 'medium' | 'large';

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
}

export interface TabsProps {
    items: TabItem[];
    defaultActiveTab?: string;
    onTabChange?: (tabId: string) => void;
    variant?: TabsVariant;
    size?: TabsSize;
    className?: string;
    fullWidth?: boolean;
}
