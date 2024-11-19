'use client';

import styles from './Profile.module.css';
import {Fragment, useContext, useEffect, useState} from 'react';
import {UserContext} from '@/context/user.context';
import {getOrders} from '@/api/order';
import {Order, OrderResponse} from '@/interfaces/order.interface';
import Htag from '@/components/Htag/Htag';
import cn from 'classnames';
import {motion} from 'framer-motion';
import {useRouter} from 'next/navigation';

function Profile() {

	const router = useRouter();
	const {jwt, setJwt, setProfile} = useContext(UserContext);
	const [orders, setOrders] = useState<OrderResponse[]>([]);
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (jwt) {
			const fetchOrders = async () => {
				const res = await getOrders(jwt);
				setOrders(res);
			};
			fetchOrders();
		}
	}, [jwt]);

	const variants = {
		visible: {
			opacity: 1,
			height: 'auto'
		},
		hidden: {
			opacity: 0,
			height: 0
		}
	};

	const formatedDate = (date: string) => {
		return new Intl.DateTimeFormat('ru-RU', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(date)).replace('г.', '');
	};

	const calculateTotalPrice = (data: Order[]) => {
		return data.reduce((acc, o) => acc += (o.price * o.count), 0);
	};

	const onClick = () => {
		setJwt('');
		setProfile(null);
		router.push('/');
	};

	return (
		<div className={styles['wrapper']}>
			<Htag tag={'h1'}>Мой аккаунт</Htag>
			<div className={styles['main']}>
				<div className={styles['actions']}>
					<button
						onClick={() => setOpen(o => !o)}
						className={cn(styles['button'],
							{[styles['active']]: open})}>
						Заказы
					</button>
					<button
						onClick={onClick}
						className={styles['button']}>Выход
					</button>
				</div>
				<hr className={styles['main-hr']}/>
				<motion.div
					variants={variants}
					initial={open ? 'visible' : 'hidden'}
					animate={open ? 'visible' : 'hidden'}
					className={styles['orders']}>
					<div>Номер заказа</div>
					<div>Дата</div>
					<div>Статус</div>
					<div>Итог</div>
					<hr className={styles['orders-hr']}/>
					{orders.map((o, i) => (
						<Fragment key={i}>
							<div className={styles['order-data']}>{o.id}</div>
							<div className={styles['order-data']}>{formatedDate(o.createdAt)}</div>
							<div className={styles['order-data']}>Оформление</div>
							<div className={styles['order-data']}>$ {calculateTotalPrice(o.data)}</div>
						</Fragment>
					))}
				</motion.div>
				<motion.div
					variants={variants}
					initial={open ? 'visible' : 'hidden'}
					animate={open ? 'visible' : 'hidden'}
					className={styles['mobile-orders']}>
					{orders.map((o, i) => (
						<div className={styles['mobile-order']} key={i}>
							<div className={styles['order-block']}>
								Номер заказа
								<div className={styles['order-data']}>
									{o.id}
								</div>
							</div>
							<div className={styles['order-block']}>
								Дата
								<div className={styles['order-data']}>
									{formatedDate(o.createdAt)}
								</div>
							</div>
							<div className={styles['order-block']}>
								Статус
								<div className={styles['order-data']}>
									Оформление
								</div>
							</div>
							<div className={styles['order-block']}>
								Итог
								<div className={styles['order-data']}>
									$ {calculateTotalPrice(o.data)}
								</div>
							</div>
							<hr className={styles['mobile-hr']}/>
						</div>
					))}

				</motion.div>
			</div>
		</div>
	);
}

export default Profile;