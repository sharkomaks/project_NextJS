import {ReactNode} from 'react';
import {Product} from '@/interfaces/products.interface';
import {CartItem} from '@/interfaces/cart.iterface';

export interface UserContextType {
	addToCart: (sku: number, count?: number) => void;
	toggleToFavorites: (product: Product) => void;
	dataCart: CartItem[];
	dataFavorites: Product[];
}

export interface UserContextProps {
	children: ReactNode;
}