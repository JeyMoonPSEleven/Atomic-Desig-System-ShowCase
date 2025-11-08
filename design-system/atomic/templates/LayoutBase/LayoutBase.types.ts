import { ReactNode } from 'react';
import { HeaderProps } from '../../organisms/Header/Header.types';
import { FooterProps } from '../../organisms/Footer/Footer.types';

export interface LayoutBaseProps {
    children: ReactNode;
    headerProps?: Partial<HeaderProps>;
    footerProps?: Partial<FooterProps>;
    showHeader?: boolean;
    showFooter?: boolean;
    className?: string;
    contentClassName?: string;
    variant?: 'default' | 'minimal' | 'full-width' | 'sidebar';
}
