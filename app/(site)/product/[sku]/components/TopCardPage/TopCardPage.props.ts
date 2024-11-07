import {Product} from '@/interfaces/products.interface';
import {HTMLAttributes} from 'react';

export interface TopCardPageProps extends HTMLAttributes<HTMLDivElement> {
	product: Product;
	category: string;
}