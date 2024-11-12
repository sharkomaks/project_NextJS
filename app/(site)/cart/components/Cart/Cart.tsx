'use client';

import styles from './Cart.module.css';
import {useContext, useEffect, useState} from 'react';
import {getProduct} from '@/api/product';
import {Product} from '@/interfaces/products.interface';
import {UserContext} from '@/context/user.context';
import Htag from '@/components/Htag/Htag';
import CartItem from '../CartItem/CartItem';
import CartForm from '../CartForm/CartForm';

function Cart() {

	const {dataCart} = useContext(UserContext);
	const [cart, setCart] = useState<Product[]>([]);

	useEffect(() => {
		getData();
	}, [dataCart]);

	const getData = async () => {
		const data = await Promise.all(dataCart.map(i => getProduct(i.sku)));
		setCart(data as Product[]);
	};

	const totalCount = dataCart.reduce((acc, i) => {
		const price = cart.find(c => c.sku === i.sku)?.price;
		if (price) {
			return acc += i.count * price;
		}
		return acc;
	}, 0);

	return (
		<div className={styles['wrapper']}>
			<Htag tag={'h1'}>Корзина</Htag>
			<div className={styles['cart-list']}>
				{cart.map(p => <CartItem key={p.sku} product={p}/>)}
			</div>
			<CartForm totalPrice={totalCount}/>
		</div>
	);
}

export default Cart;