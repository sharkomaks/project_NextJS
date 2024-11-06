import {API} from '@/api/api';
import {Product} from '@/interfaces/products.interface';

export async function getProduct(sku: string): Promise<Product | undefined> {

	try {
		const res = await fetch(API.product.find + `/${sku}`, {
			next: {revalidate: 10}
		});

		if (!res.ok) {
			new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
		}

		const contentType = res.headers.get('content-type');
		if (contentType && contentType.includes('application/json')) {
			return await res.json();
		} else {
			new Error('Ответ не содержит JSON данных.');
		}

	} catch (e) {
		if (e instanceof Error) {
			console.error(e.message);
		}
	}
}