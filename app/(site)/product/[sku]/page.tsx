import {Metadata} from 'next';
import {getProducts} from '@/api/products';
import {getProduct} from '@/api/product';
import {getFilter} from '@/api/filter';
import {notFound} from 'next/navigation';
import CardPage from './components/CardPage/CardPage';

export async function generateMetadata({params}: { params: Promise<{ sku: string }> }): Promise<Metadata> {
	const {sku} = await params;

	const product = await getProduct(sku);

	return {
		title: product?.name,
		description: product?.description
	};
}


export async function generateStaticParams() {
	const res = await getProducts({limit: 1000});
	return res.products.map(p => ({sku: p.sku.toString()}));
}


async function Page({params}: { params: Promise<{ sku: string }> }) {

	const {sku} = await params;

	const filter = await getFilter();
	const product = await getProduct(sku);
	if (!product) notFound();

	const category = filter.categories.find(c => c.id === product.categoryId)?.name ?? '';

	return (
		<div>
			<CardPage product={product} category={category}/>
		</div>
	);
}

export default Page;