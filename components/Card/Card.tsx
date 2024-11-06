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

function Card({product, favorites, sold, className}: CardProps) {

	const {name, price, discount, images, sku} = product;

	const [open, setOpen] = useState<boolean>(false);

	const variants = {
		visible: {
			opacity: 1
		},
		hidden: {
			opacity: 0
		}
	};

	const calculateOldPrice = (newPrice: number, sale: number): number => {
		return newPrice / (1 - sale / 100);
	};

	return (
		<div className={cn(styles['card'], className)}>
			<div
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				className={styles['wrapper']}>
				<img src={images[0]} alt={name}/>
				<motion.div
					variants={variants}
					initial={'hidden'}
					animate={open ? 'visible' : 'hidden'}
					className={styles['actions']}>
					<Link href={'/'}><CartIcon/></Link>
					<Link href={`/product/${sku}`}><EyeIcon/></Link>
					<Link href={'/'}><FavoritesIcon/></Link>
				</motion.div>
				{!!discount && <div className={styles['sale']}>- {discount}%</div>}
				{sold && <div className={styles['sale']}>Продан</div>}
				{favorites && <div className={styles['favorites']}><FavoritesAccentIcon/></div>}
			</div>
			<div className={styles['name']}>{name}</div>
			<div className={styles['price-wrapper']}>
				{!!discount &&
					<div className={styles['old-price']}>${calculateOldPrice(price, discount).toFixed(2)}</div>}
				<div className={styles['price']}>${price.toFixed(2)}</div>
			</div>
		</div>
	);
}

export default Card;