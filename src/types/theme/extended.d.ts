// material ui
import { LoadingButtonProps } from '@mui/lab';
import { ButtonProps, ChipProps, IconButtonProps, SliderProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

// ==============================|| EXTENDED COMPONENT - TYPES  ||============================== //

export type ButtonVariantProps = 'contained' | 'light' | 'outlined' | 'dashed' | 'text' | 'shadow';
export type IconButtonShapeProps = 'rounded' | 'square';
export type ColorProps =
	| ChipProps['color']
	| ButtonProps['color']
	| LoadingButtonProps['color']
	| IconButtonProps['color']
	| SliderProps['color'];
export type AvatarTypeProps = 'filled' | 'outlined' | 'combined';
export type SizeProps = 'badge' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ExtendedStyleProps = {
	color: ColorProps;
	theme: Theme;
};
export interface ButtonOption {
	isMain: boolean;
	label: string;
	color: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning' | undefined;
	onClick: () => void;
	isLoading?: boolean;
	disabled?: boolean;
}
