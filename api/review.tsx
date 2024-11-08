import {ReviewFormInterface} from '@/components/ReviewForm/ReviewForm.interface';
import {API} from '@/api/api';


export async function setReview(sku: number, data: ReviewFormInterface): Promise<ReviewResponse | undefined> {

	try {
		const res = await fetch(`${API.product.find}/${sku}/review`, {
			method: 'POST',
			body: JSON.stringify({
				...data
			}),
			headers: new Headers({'content-type': 'application/json'})
		});
		if (!res.ok) {
			const errorData = await res.json();
			return Promise.reject(new Error((errorData.message || 'Failed to submit review')));
		}
		return res.json();
	} catch (e) {
		if (e instanceof Error) {
			return Promise.reject(e);
		}
	}
}

interface ReviewResponse {
	message: string;
}