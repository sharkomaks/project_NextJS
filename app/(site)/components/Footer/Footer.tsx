'use client';

import styles from './Footer.module.css';
import LinkedInIcon from './icons/linkedin.svg';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import TwitterIcon from './icons/twitter.svg';
import Notice from '@/components/Notice/Notice';
import Form from '@/components/Form/Form';
import Link from 'next/link';
import {useState, useEffect} from 'react';

function Footer() {

	const [open, setOpen] = useState<boolean>(false);

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
			<Form className={styles['form']} type={'email'} setOpen={setOpen}></Form>
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