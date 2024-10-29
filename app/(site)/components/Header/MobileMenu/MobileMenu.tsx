'use client';

import styles from './MobileMenu.module.css';
import Logo from '../icons/logo.svg';
import MenuIcon from './menu.svg';
import CloseIcon from './close.svg';
import LoginIcon from '../icons/login.svg';
import FavoritesIcon from '../icons/favorites.svg';
import Link from 'next/link';
import CartIcon from '@/components/CartIcon/CartIcon';
import SearchInput from '@/components/SearchInput/SearchInput';
import {motion} from 'framer-motion';
import {useState} from 'react';


function MobileMenu() {

	const [open, setOpen] = useState<boolean>(false);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%'
		}
	};

	return (
		<nav className={styles['mobile-menu']}>
			<div className={styles['head']}>
				<div>
					<Link href={'/'}><Logo/></Link>
				</div>
				<CartIcon count={1}/>
				<div className={styles['toggle']}>
					{open
						? <CloseIcon onClick={() => setOpen(false)}/>
						: <MenuIcon onClick={() => setOpen(true)}/>}
				</div>
			</div>
			<motion.div
				variants={variants}
				initial={'closed'}
				animate={open ? 'opened' : 'closed'}
				className={styles['body']}>
				<SearchInput className={styles['input']}/>
				<Link href={'/'}>Главная</Link>
				<Link href={'/'}>Магазин</Link>
				<Link href={'/'}>О нас</Link>
				<hr className={styles['hr']}/>
				<Link href={'/'}>
					<LoginIcon/>
					Мой аккаунт
				</Link>
				<Link href={'/'}>
					<FavoritesIcon/>
					Избранное
				</Link>
			</motion.div>
		</nav>
	);
}

export default MobileMenu;