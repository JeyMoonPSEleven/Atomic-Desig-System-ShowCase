// src/design-system/atomic/atoms/Heading/Heading.types.ts
import React from 'react';

export type HeadingVariant = 'display' | 'heading' | 'subheading';
export type HeadingColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
export type HeadingAlign = 'left' | 'center' | 'right' | 'justify';
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    variant?: HeadingVariant;
    color?: HeadingColor;
    align?: HeadingAlign;
    animated?: boolean;
    children: React.ReactNode;
}
