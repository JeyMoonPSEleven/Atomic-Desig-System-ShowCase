export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: string;
}

export interface DropdownProps {
    label?: string;
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    searchable?: boolean;
}
