import {ButtonHTMLAttributes, ReactNode} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	color?: 'white' | 'black';
}