// src/design-system/atomic/molecules/Timeline/Timeline.types.ts
import React from 'react';

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  icon?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
  variant?: 'default' | 'compact';
}

