import styles from './not-found.module.css';
import Htag from '@/components/Htag/Htag';
import Link from 'next/link';

export default function NotFound() {

	return (
		<div className={styles['not-found']}>
			<Htag tag={'h1'}>404 ошибка</Htag>
			<div>
				<p>Страница не найдена, попробуйте перейти</p>
				<p>на главную страницу</p>
			</div>
			<Link aria-label={'Переход на главную страницу сайта'} href="/">Главная страница</Link>
		</div>
	);
}