import {API} from '@/api/api';

export async function setRestore(email: string): Promise<RestoreResponse> {

	const res = await fetch(API.auth.restore, {
		method: 'POST',
		body: JSON.stringify({
			email
		})
	});
	return res.json();
}

interface RestoreResponse {
	message: string;
}