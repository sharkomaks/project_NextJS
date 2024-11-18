import styles from './CartForm.module.css';
import {CartFormProps} from './CartForm.props';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import {useForm} from 'react-hook-form';
import {CartFormInterface} from './CartForm.interface';
import Htag from '@/components/Htag/Htag';
import {useContext, useEffect} from 'react';
import {UserContext} from '@/context/user.context';
import {updateProfile} from '@/api/profile';
import {createOrder} from '@/api/order';
import {setRegister} from '@/api/register';
import {useRouter} from 'next/navigation';

function CartForm({cart, totalPrice}: CartFormProps) {

	const router = useRouter();
	const {jwt, setJwt, profile, setProfile, dataCart, setDataCart} = useContext(UserContext);
	const {register, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<CartFormInterface>();
	const updatedCart = cart.map(i => ({
		name: i.name,
		price: i.price,
		count: dataCart.find(c => c.sku === i.sku)?.count ?? 0
	}));

	useEffect(() => {
		if (profile) {
			reset({
				name: profile.name ? profile.name : '',
				phone: profile.phone ? profile.phone : '',
				address: profile.address ? profile.address : ''
			});
		}
	}, [profile, reset]);

	const sendOrder = async (data: CartFormInterface) => {
		if (!updatedCart.length) {
			return;
		}
		if (jwt && profile) {
			const updatedProfile = await updateProfile(jwt, {
				name: data.name,
				phone: data.phone,
				address: data.address
			});
			setProfile(updatedProfile);
			const order = await createOrder(jwt, updatedCart);
			setDataCart([]);
			router.push(`/order-success?orderId=${order.id}`);
		}
		if (!jwt || !profile) {
			const register = await setRegister(data);
			if ('message' in register) return;
			setJwt(register.access_token);
			const order = await createOrder(register.access_token, updatedCart);
			setDataCart([]);
			router.push(`/order-success?orderId=${order.id}`);
		}
	};

	return (
		<form onSubmit={handleSubmit(sendOrder)} className={styles['cart-form']}>
			{!profile?.email && <div className={styles['email']}>
				<Input
					{...register('email', {required: {value: true, message: 'Заполните email'}})}
					type={'email'}
					placeholder={errors.email ? '' : 'Email'}/>
				{errors.email &&
					<span className={styles['error-message']}>{errors.email.message}</span>}
			</div>}
			{!profile && <div className={styles['password']}>
				<Input
					{...register('password', {required: {value: true, message: 'Заполните пароль'}})}
					type={'password'}
					placeholder={errors.password ? '' : 'Пароль'}/>
				{errors.password &&
					<span className={styles['error-message']}>{errors.password.message}</span>}
			</div>}
			<div className={styles['address']}>
				<Input
					{...register('address', {required: {value: true, message: 'Заполните адрес доставки'}})}
					placeholder={errors.address ? '' : 'Адрес доставки'}/>
				{errors.address &&
					<span className={styles['error-message']}>{errors.address.message}</span>}
			</div>
			<div className={styles['name']}>
				<Input
					{...register('name', {required: {value: true, message: 'Заполните имя'}})}
					placeholder={errors.name ? '' : 'Имя'}/>
				{errors.name &&
					<span className={styles['error-message']}>{errors.name.message}</span>}
			</div>
			<div className={styles['phone']}>
				<Input
					{...register('phone', {required: {value: true, message: 'Введите номер телефона'}})}
					placeholder={errors.phone ? '' : 'Телефон'}/>
				{errors.phone &&
					<span className={styles['error-message']}>{errors.phone.message}</span>}
			</div>
			<div className={styles['total-price']}>
				<Htag tag={'h2'}>Итог</Htag>
				<hr/>
				<div className={styles['price']}>
					Стоимость
					<div>
						$ {totalPrice.toFixed(2)}
					</div>
				</div>
			</div>
			<Button onClick={() => clearErrors()} color={'black'}>Оплатить</Button>
		</form>
	);
}

export default CartForm;