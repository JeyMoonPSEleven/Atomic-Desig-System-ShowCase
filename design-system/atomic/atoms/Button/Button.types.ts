// src/design-system/atomic/atoms/Button/Button.types.ts
import React from 'react';

// Define los posibles variants y sizes como tipos para reutilizar
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  isLoading?: boolean; // Para mostrar un estado de carga
  // Podríamos añadir 'leftIcon' y 'rightIcon' tipo React.ReactElement aquí si quisiéramos botones con iconos
  children: React.ReactNode;
}
