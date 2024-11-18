'use client';

import styles from './OrderSuccess.module.css';
import {useSearchParams} from 'next/navigation';
import {Fragment, useContext, useEffect, useState} from 'react';
import {UserContext} from '@/context/user.context';
import {OrderResponse} from '@/interfaces/order.interface';
import {findOrder} from '@/api/order';
import CheckIcon from './check.svg';
import Htag from '@/components/Htag/Htag';

function OrderSuccess() {

	const {jwt, profile} = useContext(UserContext);
	const searchParams = useSearchParams();
	const orderId = searchParams.get('orderId');
	const [order, setOrder] = useState<OrderResponse | null>(null);

	useEffect(() => {
		if (jwt && orderId) {
			const fetchOrder = async () => {
				const res = await findOrder(jwt, Number(orderId));
				setOrder(res);
			};
			fetchOrder();
		}
	}, [jwt, orderId]);

	const newDate = order?.createdAt ? new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(order.createdAt)).replace('г.', '') : '';

	const totalPrice = order?.data ? order.data.reduce((acc, o) => acc += (o.price * o.count), 0) : 0;

	return (
		<div className={styles['wrapper']}>
			{order?.status === 'new' &&
				<div className={styles['message']}>
					<CheckIcon/>
					Мы получили ваш заказ
				</div>}
			<div className={styles['order-details']}>
				<Htag tag={'h2'}>Детали заказа</Htag>
				<div className={styles['details-data']}>
					<div className={styles['detail-field']}>
						<div>Номер</div>
						<div className={styles['detail-data']}>{order?.id}</div>
					</div>
					<div className={styles['detail-field']}>
						<div>Email</div>
						<div className={styles['detail-data']}>{profile?.email}</div>
					</div>
					<div className={styles['detail-field']}>
						<div>Дата заказа</div>
						<div className={styles['detail-data']}>{newDate}</div>
					</div>
					<div className={styles['detail-field']}>
						<div>Адрес доставки</div>
						<div className={styles['detail-data']}>{profile?.address}</div>
					</div>
					<div className={styles['detail-field']}>
						<div>Имя</div>
						<div className={styles['detail-data']}>{profile?.name}</div>
					</div>
					<div className={styles['detail-field']}>
						<div>Телефон</div>
						<div className={styles['detail-data']}>{profile?.phone}</div>
					</div>
				</div>
			</div>
			<div className={styles['order-data']}>
				<Htag tag={'h2'}>Данные заказы</Htag>
				<div className={styles['data-wrapper']}>
					<div className={styles['title-name']}>Продукты</div>
					<div className={styles['title-count']}>Количество</div>
					<div className={styles['title-price']}>Итог</div>
					<hr className={styles['data-hr']}/>
					{!!order?.data?.length && order.data.map((o, i) => (
						<Fragment key={i}>
							<div className={styles['data-name']}>{o.name}</div>
							<div className={styles['data-count']}>{o.count}</div>
							<div className={styles['data-price']}>${o.price * o.count}</div>
						</Fragment>
					))}
					<hr className={styles['data-hr']}/>
					<div className={styles['data-result']}>Итог</div>
					<div className={styles['data-result']}>${totalPrice}</div>
				</div>
			</div>
		</div>
	);
}

export default OrderSuccess;