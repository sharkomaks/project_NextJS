import styles from './Wrapper.module.css';
import {WrapperProps} from './Wrapper.props';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Wrapper({children}: WrapperProps) {
	return (
		<div className={styles['wrapper']}>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</div>
	);
}

export default Wrapper;