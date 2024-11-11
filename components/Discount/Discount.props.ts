import {HTMLAttributes} from 'react';

export interface DiscountProps extends HTMLAttributes<HTMLDivElement> {
	discount: number;
}