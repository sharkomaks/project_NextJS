'use client';

import styles from './MobileMenu.module.css';
import Logo from '../icons/logo.svg';
import MenuIcon from './menu.svg';
import CloseIcon from './close.svg';
import ExitIcon from './exit.svg';
import LoginIcon from '../icons/login.svg';
import FavoritesIcon from '../icons/favorites.svg';
import Link from 'next/link';
import CartIcon from '@/components/CartIcon/CartIcon';
import SearchInput from '@/components/SearchInput/SearchInput';
import {motion} from 'framer-motion';
import {useContext, useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {UserContext} from '@/context/user.context';

function MobileMenu() {

	const router = useRouter();
	const {profile, setJwt, setProfile} = useContext(UserContext);
	const [open, setOpen] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

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

	const onClick = () => {
		setJwt('');
		setProfile(null);
		router.push('/');
		setOpen(false);
	};

	return (
		<nav className={styles['mobile-menu']}>
			<div className={styles['head']}>
				<div>
					<Link href={'/'}><Logo/></Link>
				</div>
				<Link href={'/cart'}><CartIcon/></Link>
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
				<Link href={'/store'}>Магазин</Link>
				<Link href={'/about'}>О нас</Link>
				<hr className={styles['hr']}/>
				{!profile && <Link href={'/login'}>
					<LoginIcon/>
					Вход
				</Link>}
				{profile && <Link href={'/profile'}>
					<LoginIcon/>
					Мой аккаунт
				</Link>}
				<Link href={'/favorites'}>
					<FavoritesIcon/>
					Избранное
				</Link>
				{profile && <button onClick={onClick}>
					<ExitIcon/>
					Выход
				</button>}
			</motion.div>
		</nav>
	);
}

export default MobileMenu;