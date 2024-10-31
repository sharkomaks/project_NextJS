import {SelectHTMLAttributes} from 'react';
import {Category} from '@/interfaces/filter.interface';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	option: Category[];
}