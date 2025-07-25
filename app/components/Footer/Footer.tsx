'use client';

import styles from './Footer.module.css';
import Notice from '@/components/Notice/Notice';
import Form from '@/components/Form/Form';
import Social from '@/components/Social/Social';
import Link from 'next/link';
import {useState} from 'react';

function Footer() {

	const [open, setOpen] = useState<boolean>(false);

	return (
		<footer className={styles['footer']}>
			<div className={styles['info']}>
				<Link aria-label={'Переход на страницу с контактами'} href={'/'}>КОНТАКТЫ</Link>
				<Link aria-label={'Переход на страницу с условиями покупки'} href={'/'}>УСЛОВИЯ ПОКУПКИ</Link>
				<Link aria-label={'Переход на страницу с доставкой и возвратом'} href={'/'}>ДОСТАВКА И ВОЗВРАТ</Link>
			</div>
			<Form className={styles['form']} type={'email'} setOpen={setOpen}></Form>
			<div className={styles['copy']}>
				&copy; {new Date().getFullYear()} Shoppe
			</div>
			<Social className={styles['social']}/>
			<Notice open={open} setOpen={setOpen}>Ваш email подписан на новости и уведомления</Notice>
		</footer>
	);
}

export default Footer;