import {SelectHTMLAttributes} from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	option: {
		categoryId: number,
		name: string
	}[];
}

