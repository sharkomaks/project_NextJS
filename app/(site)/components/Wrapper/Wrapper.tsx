import styles from './Wrapper.module.css';
import {WrapperProps} from './Wrapper.props';

function Wrapper({children}: WrapperProps) {
	return (
		<div className={styles['wrapper']}>
			<header>Header</header>
			<main>{children}</main>
			<footer>Footer</footer>
		</div>

	);
}

export default Wrapper;