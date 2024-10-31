import Store from './components/Store/Store';
import {getFilter} from '@/api/filter';

export default async function Page() {

	const filter = await getFilter();

	return (
		<Store filter={filter}/>
	);
}