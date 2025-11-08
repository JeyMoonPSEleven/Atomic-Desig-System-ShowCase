// src/design-system/atomic/atoms/Link/Link.types.ts
import React from 'react';

export type LinkVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'muted';
export type LinkSize = 'small' | 'medium' | 'large';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    variant?: LinkVariant;
    size?: LinkSize;
    children: React.ReactNode;
    isExternal?: boolean;
    underline?: boolean;
}
