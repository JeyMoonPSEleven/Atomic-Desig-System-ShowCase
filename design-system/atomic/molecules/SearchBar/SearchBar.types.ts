export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  showClearButton?: boolean;
  showSearchButton?: boolean;
  fullWidth?: boolean;
}
