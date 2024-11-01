import {API} from '@/api/api';
import {Products} from '@/interfaces/products.interface';

export async function getProducts(params?: productProps): Promise<Products> {

	const queryParams = {
		limit: '6',
		offset: (params?.offset ?? 0).toString(),
		name: params?.name ?? '',
		priceMin: params?.priceMin?.toString() ?? '',
		priceMax: params?.priceMax?.toString() ?? '',
		categoryId: params?.categoryId?.toString() ?? '',
		discounted: params?.discounted ? 'true' : ''
	};

	const res = await fetch(API.store.products + '?' + new URLSearchParams(queryParams));
	return res.json();
}


interface productProps {
	offset?: number;
	name?: string;
	priceMin?: number;
	priceMax?: number;
	categoryId?: number;
	discounted?: boolean;
}