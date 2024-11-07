import styles from './MainPage.module.css';
import MainGallery from '../MainGallery/MainGallery';
import {getProducts} from '@/api/products';
import Htag from '@/components/Htag/Htag';
import Card from '@/components/Card/Card';
import Link from 'next/link';

async function MainPage() {

	const res = await getProducts();

	return (
		<>
			<MainGallery/>
			<div className={styles['title']}>
				<Htag tag={'h1'}>Последние поступления</Htag>
				<Link href={'/store'}>Все</Link>
			</div>
			<div className={styles['card-list']}>
				{res.products.map((p, i) => <Card key={i} product={p}/>)}
			</div>
		</>
	);
}

export default MainPage;