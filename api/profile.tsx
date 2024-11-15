import {API} from '@/api/api';
import {Profile} from '@/interfaces/profile';

export async function getProfile(jwt: string): Promise<Profile> {

	const res = await fetch(API.user.profile, {
		next: {revalidate: 10},
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	});
	return res.json();
}