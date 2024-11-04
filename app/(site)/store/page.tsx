import Store from './components/Store/Store';
import {getFilter} from '@/api/filter';
import {getProducts} from '@/api/products';

export default async function Page() {

	const filter = await getFilter();
	const products = await getProducts();

	return (
		<Store filter={filter} products={products}/>
	);
}