import styles from './CartIcon.module.css';
import {CartIconProps} from './CartIcon.props';
import Cart from './cart.svg';
import cn from 'classnames';
import {useContext} from 'react';
import {UserContext} from '@/context/user.context';

function CartIcon({className}: CartIconProps) {

	const {dataCart} = useContext(UserContext);

	const count = dataCart.reduce((acc, c) => acc += c.count, 0);

	return (
		<div className={cn(styles['cart-icon'], className)}>
			<Cart/>
			{!!count && <div className={styles['cart-count']}>{count}</div>}
		</div>
	);
}

export default CartIcon;