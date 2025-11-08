// src/design-system/atomic/molecules/Tooltip/Tooltip.types.ts
import React from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariant = 'default' | 'dark' | 'light';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: TooltipPosition;
  variant?: TooltipVariant;
  show?: boolean;
  delay?: number;
  disabled?: boolean;
}

