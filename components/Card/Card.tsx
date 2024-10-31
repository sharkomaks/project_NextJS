'use client';

import styles from './Card.module.css';
import {CardProps} from './Card.props';
import CartIcon from './icons/cart.svg';
import FavoritesIcon from './icons/favorites.svg';
import FavoritesAccentIcon from './icons/favorites-accent.svg';
import EyeIcon from './icons/eye.svg';
import cn from 'classnames';
import {motion} from 'framer-motion';
import {useState} from 'react';
import Link from 'next/link';

function Card({img, name, price, oldPrice, sale, favorites, sold, className}: CardProps) {

	const [open, setOpen] = useState<boolean>(false);

	const variants = {
		visible: {
			opacity: 1
		},
		hidden: {
			opacity: 0
		}
	};

	return (
		<div className={cn(styles['card'], className)}>
			<div
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				className={styles['wrapper']}>
				<img src={img} alt={name}/>
				<motion.div
					variants={variants}
					initial={'hidden'}
					animate={open ? 'visible' : 'hidden'}
					className={styles['actions']}>
					<Link href={'/'}><CartIcon/></Link>
					<Link href={'/'}><EyeIcon/></Link>
					<Link href={'/'}><FavoritesIcon/></Link>
				</motion.div>
				{!!sale && <div className={styles['sale']}>- {sale}%</div>}
				{sold && <div className={styles['sale']}>Продан</div>}
				{favorites && <div className={styles['favorites']}><FavoritesAccentIcon/></div>}
			</div>
			<div className={styles['name']}>{name}</div>
			<div className={styles['price-wrapper']}>
				{!!oldPrice && <div className={styles['old-price']}>${oldPrice.toFixed(2)}</div>}
				<div className={styles['price']}>${price.toFixed(2)}</div>
			</div>
		</div>
	);
}

export default Card;