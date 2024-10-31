'use client';

import styles from './Footer.module.css';
import ArrowIcon from './icons/arrow.svg';
import LinkedInIcon from './icons/linkedin.svg';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import TwitterIcon from './icons/twitter.svg';
import Input from '@/components/Input/Input';
import Notice from '@/components/Notice/Notice';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

function Footer() {

	const {register, handleSubmit, formState: {errors}, reset} = useForm<{ email: string; }>();
	const [open, setOpen] = useState<boolean>(false);

	const submitSubscription = (data: { email: string; }) => {
		setOpen(true);
		reset();
		console.log(data.email);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setOpen(false);
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, [open]);

	return (
		<footer className={styles['footer']}>
			<div className={styles['info']}>
				<Link href={'/'}>КОНТАКТЫ</Link>
				<Link href={'/'}>УСЛОВИЯ ПОКУПКИ</Link>
				<Link href={'/'}>ДОСТАВКА И ВОЗВРАТ</Link>
			</div>
			<form className={styles['form']} onSubmit={handleSubmit(submitSubscription)}>
				<Input
					{...register('email', {
						required: {value: true, message: 'Заполните Email'}
					})}
					type={'email'}
					placeholder={errors.email
						? ''
						: 'Ваш email для акций и предложений'}/>
				{errors.email &&
					<span className={styles['error-message']}>{errors.email.message}</span>}
				<button aria-label={'Отправить форму'} className={styles['form-button']}>
					<ArrowIcon/>
				</button>
			</form>
			<div className={styles['copy']}>
				&copy; {new Date().getFullYear()} Shoppe
			</div>
			<div className={styles['social']}>
				<Link aria-label={'LinkedIn'} href={'/'}><LinkedInIcon/></Link>
				<Link aria-label={'Facebook'} href={'/'}><FacebookIcon/></Link>
				<Link aria-label={'Instagram'} href={'/'}><InstagramIcon/></Link>
				<Link aria-label={'Twitter'} href={'/'}><TwitterIcon/></Link>
			</div>
			<Notice open={open}>Ваш email подписан на новости и уведомления</Notice>
		</footer>
	);
}

export default Footer;