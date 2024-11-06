import {getProducts} from '@/api/products';
import {getProduct} from '@/api/product';
import {notFound} from 'next/navigation';
import {Metadata} from 'next';

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

	const product = await getProduct(sku);
	if (!product) notFound();

	return (
		<div>
			{product.name}
		</div>
	);
}

export default Page;