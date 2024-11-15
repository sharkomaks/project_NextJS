import styles from './LoginForm.module.css';
import {useContext, useState} from 'react';
import EyeIcon from '../icons/eye-icon.svg';
import CrossedEyeIcon from '../icons/crossed-eye-icon.svg';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Checkbox from '@/components/Checkbox/Checkbox';
import {useForm} from 'react-hook-form';
import Link from 'next/link';
import {setLogin} from '@/api/login';
import cn from 'classnames';
import {LoginFormInterface} from '@/interfaces/loginForm.interface';
import {UserContext} from '@/context/user.context';
import {save} from '@/helpers/localStorage';
import {expiresAtKey} from '@/helpers/keys';

function LoginForm() {

	const {setJwt} = useContext(UserContext);
	const [enabled, setEnabled] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const {register, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<LoginFormInterface>();

	const sendLoginForm = async (data: LoginFormInterface) => {
		if (!enabled) {
			const date = new Date().setDate(new Date().getDate() + 1);
			save(expiresAtKey, JSON.stringify(date));
		} else {
			localStorage.removeItem(expiresAtKey);
		}
		const res = await setLogin({...data});
		if ('message' in res) {
			setError(res.message);
			return;
		}
		setJwt(res.access_token);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(sendLoginForm)} className={styles['login-form']}>
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
						type={open ? 'text' : 'password'}
						placeholder={errors.password ? '' : 'Пароль'}/>
					<div
						onClick={() => setOpen(o => !o)}
						className={styles['password-button']}>
						{open ? <EyeIcon/> : <CrossedEyeIcon/>}
					</div>
					{errors.password &&
						<span className={styles['error-message']}>{errors.password.message}</span>}
				</div>
				<div className={styles['check']}>
					<Checkbox enabled={enabled} setEnabled={setEnabled} login/>
					Запомнить меня
				</div>
				<Button className={styles['login-button']} onClick={() => clearErrors()} color={'black'}>Вход</Button>
				{error &&
					<span className={cn(styles['error-message'], styles['login-error'])}>{error}</span>}
			</form>
			<div className={styles['forgot-password']}>
				<Link href={'/recovery'}>Забыли пароль?</Link>
			</div>
		</>
	);
}

export default LoginForm;