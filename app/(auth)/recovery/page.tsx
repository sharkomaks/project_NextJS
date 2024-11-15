'use client';

import styles from './Recovery.module.css';
import {useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {UserContext} from '@/context/user.context';
import Input from '@/components/Input/Input';
import {useForm} from 'react-hook-form';
import Htag from '@/components/Htag/Htag';
import Button from '@/components/Button/Button';
import Notice from '@/components/Notice/Notice';
import {setRestore} from '@/api/restore';

function Recovery() {

	const router = useRouter();
	const {profile} = useContext(UserContext);
	const [open, setOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const {register, handleSubmit, formState: {errors}, reset} = useForm<{ email: string }>();

	useEffect(() => {
		if (profile) {
			router.push('/');
		}
	}, [profile, router]);

	const sendForm = async (data: { email: string }) => {
		const res = await setRestore(data.email);
		setMessage(res.message);
		setOpen(true);
		reset();
	};

	return (
		<div className={styles['wrapper']}>
			<Htag tag={'h1'}>Забыли пароль?</Htag>
			<div>
				Если вы забыли пароль, то введите свой email и мы отправим вам ссылку на восстановление
			</div>
			<form onSubmit={handleSubmit(sendForm)} className={styles['form']}>
				<Input
					{...register('email', {required: {value: true, message: 'Заполните email'}})}
					type={'email'}
					placeholder={errors.email ? '' : 'Email'}/>
				{errors.email &&
					<span className={styles['error-message']}>{errors.email.message}</span>}
				<Button color={'black'} aria-label={'Отправить форму'} className={styles['form-button']}>
					Сбросить пароль
				</Button>
			</form>
			<Notice open={open} setOpen={setOpen}>{message}</Notice>
		</div>
	);
}

export default Recovery;