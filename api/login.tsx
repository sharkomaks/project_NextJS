import {API} from '@/api/api';
import {LoginFormInterface} from '@/interfaces/loginForm.interface';

export async function setLogin(data: LoginFormInterface): Promise<LoginResponse | ErrorResponse> {
	try {
		const res = await fetch(API.auth.login, {
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

interface LoginResponse {
	access_token: string;
}

interface ErrorResponse {
	message: string;
	error: string;
	statusCode: number;
}