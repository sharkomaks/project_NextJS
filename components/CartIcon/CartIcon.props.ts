import {HTMLAttributes} from 'react';

export interface CartIconProps extends HTMLAttributes<HTMLDivElement> {
	count: number;
}