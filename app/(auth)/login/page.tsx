'use client';

import styles from './Login.module.css';
import Htag from '@/components/Htag/Htag';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import {useContext, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import cn from 'classnames';
import {useRouter} from 'next/navigation';
import {UserContext} from '@/context/user.context';

function Login() {

	const router = useRouter();
	const {profile} = useContext(UserContext);
	const [open, setOpen] = useState<[boolean, boolean]>([true, false]);

	useEffect(() => {
		if (profile) {
			router.push('/');
		}
	}, [profile, router]);

	const variants = {
		enter: {x: 0, opacity: 1, transition: {duration: 0.4}},
		exitLeft: {x: 300, opacity: 0, transition: {duration: 0.4}},
		exitRight: {x: -300, opacity: 0, transition: {duration: 0.4}}
	};

	return (
		<div className={styles['wrapper']}>
			<Htag tag={'h1'}>Мой аккаунт</Htag>
			<div className={styles['actions']}>
				<div className={cn(styles['slider'], {
					[styles['slider-right']]: open[1]
				})}/>
				<button
					onClick={() => setOpen([true, false])}
					className={cn(styles['action'])}>
					Войти
				</button>
				<button
					onClick={() => setOpen([false, true])}
					className={cn(styles['action'])}>
					Зарегистрироваться
				</button>
			</div>
			<div className={styles['form']}>
				{open[0] && (
					<motion.div
						variants={variants}
						initial="exitLeft"
						animate="enter">
						<LoginForm/>
					</motion.div>
				)}
				{open[1] && (
					<motion.div
						variants={variants}
						initial="exitRight"
						animate="enter">
						<RegisterForm/>
					</motion.div>
				)}
			</div>
		</div>
	);
}

export default Login;