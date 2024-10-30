'use client';

import styles from './Menu.module.css';
import Logo from '../icons/logo.svg';
import GlassIcon from '../icons/glass.svg';
import FavoritesIcon from '../icons/favorites.svg';
import LoginIcon from '../icons/login.svg';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useState} from 'react';
import cn from 'classnames';
import SearchInput from '@/components/SearchInput/SearchInput';
import CartIcon from '@/components/CartIcon/CartIcon';

function Menu() {

	const [open, setOpen] = useState<boolean>(false);

	const variants = {
		visible: {
			width: 250,
			opacity: 1
		},
		hidden: {
			width: 0,
			opacity: 0
		}
	};

	return (
		<nav className={styles['menu']}>
			<div>
				<Link aria-label={'Главная страница'} href={'/'}><Logo/></Link>
			</div>
			<div className={styles['left-panel']}>
				<Link href={'/'} className={cn({
					[styles['active']]: true
				})}>
					Магазин
				</Link>
				<Link href={'/'} className={cn({
					[styles['active']]: false
				})}>
					О нас
				</Link>
			</div>
			<div className={styles['right-panel']}>
				<motion.div
					variants={variants}
					animate={open ? 'visible' : 'hidden'}
					initial={'hidden'}
					className={cn(styles['search'], {
						[styles['search-active']]: open
					})}>
					<SearchInput/>
				</motion.div>
				<button
					aria-label={'Поиск'}
					className={cn(styles['search-icon'], {
						[styles['icon-hidden']]: open
					})}
					onClick={() => setOpen(true)}>
					<GlassIcon/>
				</button>
				<Link aria-label={'Корзина'} href={'/'} className={cn(styles['icon'], {
					[styles['active']]: true
				})}>
					<CartIcon count={1}/>
				</Link>
				<Link aria-label={'Избранное'} href={'/'} className={cn(styles['icon'], {
					[styles['active']]: false
				})}>
					<FavoritesIcon/>
				</Link>
				<Link aria-label={'Вход'} href={'/'} className={cn(styles['icon'], {
					[styles['active']]: false
				})}>
					<LoginIcon/>
				</Link>
			</div>
		</nav>
	);
}

export default Menu;