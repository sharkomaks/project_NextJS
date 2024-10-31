import {API} from '@/api/api';
import {FilterData} from '@/interfaces/filter.interface';

export async function getFilter(): Promise<FilterData> {
	const res = await fetch(API.store.filter, {
		next: {revalidate: 10}
	});
	return res.json();
}