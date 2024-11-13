import styles from './CartForm.module.css';
import {CartFormProps} from './CartForm.props';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import {useForm} from 'react-hook-form';
import {CartFormInterface} from './CartForm.interface';
import Htag from '@/components/Htag/Htag';

function CartForm({totalPrice}: CartFormProps) {

	const {register, handleSubmit, formState: {errors}, clearErrors} = useForm<CartFormInterface>();

	const a = (data: CartFormInterface) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(a)} className={styles['cart-form']}>
			<div className={styles['email']}>
				<Input
					{...register('email', {required: {value: true, message: 'Заполните email'}})}
					type={'email'}
					placeholder={errors.email ? '' : 'Email'}/>
				{errors.email &&
					<span className={styles['error-message']}>{errors.email.message}</span>}
			</div>
			<div className={styles['password']}>
				<Input
					{...register('password', {required: {value: true, message: 'Заполните пароль'}})}
					type={'password'}
					placeholder={errors.password ? '' : 'Пароль'}/>
				{errors.password &&
					<span className={styles['error-message']}>{errors.password.message}</span>}
			</div>
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