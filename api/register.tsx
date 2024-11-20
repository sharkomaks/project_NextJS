import {API} from '@/api/api';
import {RegisterInterface} from '@/interfaces/register.interface';

export async function setRegister(data: RegisterInterface): Promise<RegisterResponse | ErrorResponse> {
	try {
		const res = await fetch(API.auth.register, {
			method: 'POST',
			body: JSON.stringify({
				...data
			}),
			headers: new Headers({'content-type': 'application/json'})
		});
		if (!res.ok) {
			return res.json();
		}
		return res.json();
	} catch (e) {
		return {
			message: e instanceof Error ? e.message : 'Неизвестная ошибка',
			error: 'FetchError',
			statusCode: 500
		};
	}
}

interface RegisterResponse {
	access_token: string;
}

interface ErrorResponse {
	message: string;
	error: string;
	statusCode: number;
}