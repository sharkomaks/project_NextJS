import styles from './RegisterForm.module.css';
import {RegisterFormInterface} from './RegisterForm.interface';
import {useContext, useState} from 'react';
import EyeIcon from '../icons/eye-icon.svg';
import CrossedEyeIcon from '../icons/crossed-eye-icon.svg';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Checkbox from '@/components/Checkbox/Checkbox';
import {Controller, useForm} from 'react-hook-form';
import cn from 'classnames';
import {setRegister} from '@/api/register';
import Link from 'next/link';
import {UserContext} from '@/context/user.context';

function LoginForm() {

	const {setJwt} = useContext(UserContext);
	const [open, setOpen] = useState<[boolean, boolean]>([false, false]);
	const [error, setError] = useState<string>('');
	const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<RegisterFormInterface>();

	const sendRegisterForm = async (data: RegisterFormInterface) => {
		if (data.password !== data.secondPassword) {
			setError('Пароли должны совпадать');
			return;
		}
		const res = await setRegister({email: data.email, password: data.password});
		if ('message' in res) {
			setError(res.message);
			return;
		}
		setJwt(res.access_token);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(sendRegisterForm)} className={styles['register-form']}>
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
						type={open[0] ? 'text' : 'password'}
						placeholder={errors.password ? '' : 'Пароль'}/>
					<div
						onClick={() => setOpen(o => [!o[0], o[1]])}
						className={styles['password-button']}>
						{open[0] ? <EyeIcon/> : <CrossedEyeIcon/>}
					</div>
					{errors.password &&
						<span className={styles['error-message']}>{errors.password.message}</span>}
				</div>
				<div className={styles['password']}>
					<Input
						{...register('secondPassword', {
							required: {
								value: true,
								message: 'Заполните повторный пароль'
							}
						})}
						type={open[1] ? 'text' : 'password'}
						placeholder={errors.secondPassword ? '' : 'Повторите пароль'}/>
					<div
						onClick={() => setOpen(o => [o[0], !o[1]])}
						className={styles['password-button']}>
						{open[1] ? <EyeIcon/> : <CrossedEyeIcon/>}
					</div>
					{errors.secondPassword &&
						<span className={styles['error-message']}>{errors.secondPassword.message}</span>}
				</div>
				<Controller
					name={'personalData'}
					control={control}
					rules={{required: true}}
					render={({field}) => (
						<div className={styles['check']}>
							<Checkbox error={errors.personalData} ref={field.ref} enabled={field.value}
									  setEnabled={field.onChange} login/>
							Согласен на обработку персональных данных
						</div>)}
				/>
				<Button
					className={styles['login-button']}
					onClick={() => clearErrors()}
					color={'black'}>
					Зарегистрироваться
				</Button>
				{error && <span className={cn(styles['error-message'], styles['form-error'])}>{error}</span>}
			</form>
			<div className={styles['forgot-password']}>
				<Link href={'/'}>Забыли пароль?</Link>
			</div>
		</>
	);
}

export default LoginForm;