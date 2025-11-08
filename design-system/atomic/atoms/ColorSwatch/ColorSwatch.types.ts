export interface ColorSwatchProps {
    color: string;
    name?: string;
    size?: 'small' | 'medium' | 'large';
    showName?: boolean;
    className?: string;
    onClick?: (color: string) => void;
    selected?: boolean;
}
