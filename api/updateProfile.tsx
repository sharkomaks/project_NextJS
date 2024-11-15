import {API} from '@/api/api';
import {Profile} from '@/interfaces/profile';
import {RegisterInterface} from '@/interfaces/register.interface';

export async function updateProfile(jwt: string, data: Partial<RegisterInterface>): Promise<Profile> {

	const res = await fetch(API.user.profile, {
		method: 'PATCH',
		body: JSON.stringify({
			...data
		}),
		headers: {
			Authorization: `Bearer ${jwt}`,
			'Content-Type': 'application/json'
		}
	});
	return res.json();
}