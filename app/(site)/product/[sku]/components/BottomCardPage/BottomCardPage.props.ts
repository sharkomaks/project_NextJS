import {Product} from '@/interfaces/products.interface';
import {HTMLAttributes} from 'react';

export interface BottomCardPageProps extends HTMLAttributes<HTMLDivElement> {
	product: Product;
}