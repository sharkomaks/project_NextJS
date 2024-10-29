import styles from './Wrapper.module.css';
import {WrapperProps} from './Wrapper.props';
import Header from '../Header/Header';

function Wrapper({children}: WrapperProps) {
	return (
		<div className={styles['wrapper']}>
			<Header/>
			<main>{children}</main>
			<footer>Footer</footer>
		</div>
	);
}

export default Wrapper;