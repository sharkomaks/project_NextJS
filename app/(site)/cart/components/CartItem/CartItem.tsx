import styles from './CartItem.module.css';
import RemoveIcon from './remove-icon.svg';
import {CartItemProps} from './CartItem.props';
import {calculateOldPrice} from '@/helpers/oldPrice';
import Htag from '@/components/Htag/Htag';
import {useContext} from 'react';
import {UserContext} from '@/context/user.context';
import Link from 'next/link';

function CartItem({product}: CartItemProps) {

	const {name, price, discount, images, sku} = product;
	const {dataCart, addToCart, subtractFromCart, removeFromCart} = useContext(UserContext);
	const count = dataCart.find(i => i.sku === sku)?.count;

	return (
		<>
			<div className={styles['cart-item']}>
				<Link aria-label={'Переход на страницу товара'} href={`/product/${sku}`}>
					<img src={images[0]} alt={product.name}/>
				</Link>
				<div className={styles['block']}>
					<div className={styles['name']}>
						<Htag tag={'h3'}>{name}</Htag>
						<div className={styles['price']}>
							{!!discount &&
								<div className={styles['old-price']}>
									$ {calculateOldPrice(price, discount).toFixed(2)}
								</div>}
							$ {price.toFixed(2)}
						</div>
					</div>
					<div className={styles['count']}>
						<button aria-label={'Уменьшить количество'} onClick={() => subtractFromCart(sku)}>-</button>
						{count}
						<button aria-label={'Увеличить количество'} onClick={() => addToCart(sku)}>+</button>
					</div>
				</div>
				<button
					aria-label={'Удалить товар'}
					onClick={() => removeFromCart(sku)}
					className={styles['remove']}>
					<RemoveIcon/>
				</button>
			</div>
			<hr className={styles['hr']}/>
		</>
	);
}

export default CartItem;