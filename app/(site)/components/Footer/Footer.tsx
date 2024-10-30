import styles from './Footer.module.css';
import ArrowIcon from './icons/arrow.svg';
import LinkedInIcon from './icons/linkedin.svg';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import TwitterIcon from './icons/twitter.svg';
import Input from '@/components/Input/Input';
import Link from 'next/link';

function Footer() {
	return (
		<footer className={styles['footer']}>
			<div className={styles['info']}>
				<Link href={'/'}>КОНТАКТЫ</Link>
				<Link href={'/'}>УСЛОВИЯ ПОКУПКИ</Link>
				<Link href={'/'}>ДОСТАВКА И ВОЗВРАТ</Link>
			</div>
			<form className={styles['form']}>
				<Input placeholder={'Ваш email для акций и предложений'}/>
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
		</footer>
	);
}

export default Footer;