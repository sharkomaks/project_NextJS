'use client';

import styles from './MobileMenu.module.css';
import Logo from '../icons/logo.svg';
import CartIcon from '../icons/cart.svg';
import MenuIcon from './menu.svg';
import Link from 'next/link';


function MobileMenu() {

	return (
		<nav className={styles['mobile-menu']}>
			<div>
				<Link href={'/'}><Logo/></Link>
			</div>
			<CartIcon/>
			<MenuIcon/>
		</nav>
	);
}

export default MobileMenu;