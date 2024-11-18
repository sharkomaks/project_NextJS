import {FormHTMLAttributes} from 'react';
import {Product} from '@/interfaces/products.interface';

export interface CartFormProps extends FormHTMLAttributes<HTMLFormElement> {
	cart: Product[];
	totalPrice: number;
}