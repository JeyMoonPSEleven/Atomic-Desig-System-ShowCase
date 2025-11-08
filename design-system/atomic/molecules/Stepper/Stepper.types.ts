// src/design-system/atomic/molecules/Stepper/Stepper.types.ts
import React from 'react';

export interface StepperStep {
  id: string;
  label: string;
  description?: string;
  completed?: boolean;
  disabled?: boolean;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: StepperStep[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'numbered' | 'dots';
  onStepClick?: (stepIndex: number) => void;
}

