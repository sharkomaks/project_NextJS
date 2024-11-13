'use client';

import styles from './Wrapper.module.css';
import {WrapperProps} from './Wrapper.props';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {UserContextProvider} from '@/context/user.context';

function Wrapper({children}: WrapperProps) {
	return (
		<div className={styles['wrapper']}>
			<UserContextProvider>
				<Header/>
				<main>{children}</main>
				<Footer/>
			</UserContextProvider>
		</div>
	);
}

export default Wrapper;