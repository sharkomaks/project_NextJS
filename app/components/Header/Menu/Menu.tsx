'use client';

import styles from './Menu.module.css';
import Logo from '../icons/logo.svg';
import GlassIcon from '../icons/glass.svg';
import FavoritesIcon from '../icons/favorites.svg';
import LoginIcon from '../icons/login.svg';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useContext, useState} from 'react';
import cn from 'classnames';
import SearchInput from '@/components/SearchInput/SearchInput';
import CartIcon from '@/components/CartIcon/CartIcon';
import {usePathname} from 'next/navigation';
import {UserContext} from '@/context/user.context';

function Menu() {

	const {profile} = useContext(UserContext);
	const [open, setOpen] = useState<boolean>(false);
	const pathname = usePathname();

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
				<Link aria-label={'Переход на главную страницу сайта'} href={'/'}><Logo/></Link>
			</div>
			<div className={styles['left-panel']}>
				<Link aria-label={'Переход на страницу каталога'} href={'/store'} className={cn({
					[styles['active']]: pathname.split('/')[1] === 'store'
				})}>
					Магазин
				</Link>
				<Link aria-label={'Переход на страницу о нас'} href={'/about'} className={cn({
					[styles['active']]: pathname.split('/')[1] === 'about'
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
				<Link aria-label={'Переход на страницу с корзиной'} href={'/cart'} className={cn(styles['icon'], {
					[styles['active']]: pathname.split('/')[1] === 'cart'
				})}>
					<CartIcon/>
				</Link>
				<Link aria-label={'Переход на страницу с избранным'} href={'/favorites'} className={cn(styles['icon'], {
					[styles['active']]: pathname.split('/')[1] === 'favorites'
				})}>
					<FavoritesIcon/>
				</Link>
				{!profile &&
					<Link aria-label={'Переход на страницу входа'} href={'/login'} className={cn(styles['icon'], {
						[styles['active']]: pathname.split('/')[1] === 'login'
					})}>
						<LoginIcon/>
					</Link>}
				{profile &&
					<Link aria-label={'Переход на страницу профиля'}
						  href={'/profile'}
						  className={cn(styles['icon'], {
							  [styles['active']]: pathname.split('/')[1] === 'profile'
						  })}>
						<LoginIcon/>
					</Link>}
			</div>
		</nav>
	);
}

export default Menu;