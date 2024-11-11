import {Product} from '@/interfaces/products.interface';
import {HTMLAttributes} from 'react';

export interface CardPageProps extends HTMLAttributes<HTMLDivElement> {
	product: Product;
	category: string;
}