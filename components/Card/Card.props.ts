import {HTMLAttributes} from 'react';
import {Product} from '@/interfaces/products.interface';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	product: Product;
	sold?: boolean;
}