// src/design-system/atomic/atoms/Text/Text.types.ts
import React from 'react';

export type TextVariant = 'body' | 'caption' | 'small' | 'large' | 'xl';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'danger' | 'warning' | 'info';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextElement = 'span' | 'p' | 'div' | 'label';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?: TextElement;
    variant?: TextVariant;
    color?: TextColor;
    weight?: TextWeight;
    align?: TextAlign;
    children: React.ReactNode;
}
