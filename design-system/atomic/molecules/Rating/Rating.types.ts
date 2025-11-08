export interface RatingProps {
    value?: number;
    max?: number;
    onChange?: (rating: number) => void;
    readOnly?: boolean;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    showValue?: boolean;
    allowHalf?: boolean;
}
