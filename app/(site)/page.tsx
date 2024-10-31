import Htag from '@/components/Htag/Htag';
import Card from '@/components/Card/Card';

export default function Home() {

	const card = {
		name: 'Lira Earrings',
		price: 20,
		img: '/img.png'
	};

	return (
		<div>
			<Htag tag={'h1'}>Body</Htag>
			<Card {...card} sale={21} oldPrice={40} favorites/>
			<Card {...card} sold favorites/>
		</div>
	);
}