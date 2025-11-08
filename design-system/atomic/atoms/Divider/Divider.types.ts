// src/design-system/atomic/atoms/Divider/Divider.types.ts
import React from 'react';

export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: DividerVariant;
    orientation?: DividerOrientation;
    thickness?: 'thin' | 'medium' | 'thick';
    color?: 'default' | 'light' | 'muted';
}
