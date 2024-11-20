import {ReactNode} from 'react';
import {Product} from '@/interfaces/products.interface';
import {CartItem} from '@/interfaces/cart.interface';
import {Profile} from '@/interfaces/profile';

export interface UserContextType {
	addToCart: (sku: number, count?: number) => void;
	setDataCart: (data: CartItem[]) => void;
	subtractFromCart: (sku: number) => void;
	removeFromCart: (sku: number) => void;
	toggleToFavorites: (product: Product) => void;
	dataCart: CartItem[];
	dataFavorites: Product[];
	profile: Profile | null;
	jwt: string;
	setJwt: (jwt: string) => void;
	setProfile: (data: Profile | null) => void;
}

export interface UserContextProps {
	children: ReactNode;
}