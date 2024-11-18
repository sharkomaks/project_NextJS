import {API} from '@/api/api';
import {Order, OrderResponse} from '@/interfaces/order.interface';

export async function createOrder(jwt: string, data: Order[]): Promise<OrderResponse> {

	const res = await fetch(API.order.create, {
		method: 'POST',
		body: JSON.stringify({
			items: [...data]
		}),
		headers: {
			Authorization: `Bearer ${jwt}`,
			'Content-Type': 'application/json'
		}
	});
	return res.json();
}

export async function findOrder(jwt: string, orderId: number): Promise<OrderResponse | null> {

	try {
		const res = await fetch(API.order.find + orderId, {
			headers: {
				Authorization: `Bearer ${jwt}`,
				'Content-Type': 'application/json'
			}
		});
		return res.json();
	} catch (e) {
		if (e instanceof Error) {
			throw new Error(e.message);
		}
	}
	return null;
}