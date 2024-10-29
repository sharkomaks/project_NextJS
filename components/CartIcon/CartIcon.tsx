import styles from './CartIcon.module.css';
import {CartIconProps} from './CartIcon.props';
import Cart from './cart.svg';
import cn from 'classnames';

function CartIcon({count, className}: CartIconProps) {
	return (
		<div className={cn(styles['cart-icon'], className)}>
			<Cart/>
			{!!count && <div className={styles['cart-count']}>{count}</div>}
		</div>
	);
}

export default CartIcon;