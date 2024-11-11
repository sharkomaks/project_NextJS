'use client';

import styles from './Form.module.css';
import ArrowIcon from './arrow.svg';
import GlassIcon from './glass.svg';
import Input from '@/components/Input/Input';
import {useForm} from 'react-hook-form';
import {FormProps} from '@/components/Form/Form.props';
import cn from 'classnames';

function Form({type, setOpen, submit, className, ...props}: FormProps) {

	const {register, handleSubmit, formState: {errors}, reset} = useForm<{ line: string; }>();

	const submitSubscription = (data: { line: string; }) => {
		if (setOpen) setOpen(true);
		reset();
		if (submit) submit(data.line);
	};

	return (
		<form className={cn(styles['form'], className)} onSubmit={handleSubmit(submitSubscription)} {...props}>
			<Input
				{...register('line', {
					required: {value: true, message: type === 'email' ? 'Заполните email' : 'Заполните поле поиска'}
				})}
				type={type === 'email' ? 'email' : ''}
				placeholder={errors.line
					? ''
					: type === 'email' ? 'Ваш email для акций и предложений' : 'Поиск...'}/>
			{errors.line &&
				<span className={styles['error-message']}>{errors.line.message}</span>}
			<button aria-label={'Отправить форму'} className={styles['form-button']}>
				{type === 'email' ? <ArrowIcon/> : <GlassIcon/>}
			</button>
		</form>
	);
}

export default Form;