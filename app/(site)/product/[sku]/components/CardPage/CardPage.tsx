'use client';

import styles from './CardPage.module.css';
import {CardPageProps} from './CardPage.props';
import TopCardPage from '../TopCardPage/TopCardPage';
import BottomCardPage from '../BottomCardPage/BottomCardPage';

function CardPage({product, category}: CardPageProps) {

	return (
		<div className={styles['wrapper']}>
			<TopCardPage product={product} category={category}/>
			<BottomCardPage product={product}/>
		</div>
	);
}

export default CardPage;