'use client';

import styles from './Favorites.module.css';
import Card from '@/components/Card/Card';
import {useContext} from 'react';
import {UserContext} from '@/context/user.context';
import Htag from '@/components/Htag/Htag';

function Favorites() {

	const {dataFavorites} = useContext(UserContext);

	return (
		<div className={styles['wrapper']}>
			<Htag tag={'h1'}>Избранное</Htag>
			<div className={styles['card-list']}>
				{dataFavorites?.map((f, i) => <Card key={i} product={f}/>)}
			</div>
		</div>
	);
}

export default Favorites;