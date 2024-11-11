import styles from './ReviewForm.module.css';
import {ReviewFormProps} from './ReviewForm.props';
import {ReviewFormInterface} from './ReviewForm.interface';
import {Checkbox} from '@headlessui/react';
import CheckIcon from './check-icon.svg';
import {useEffect, useState} from 'react';
import cn from 'classnames';
import Textarea from '@/components/Textarea/Textarea';
import Input from '@/components/Input/Input';
import Rating from '@/components/Rating/Rating';
import Button from '@/components/Button/Button';
import Notice from '@/components/Notice/Notice';
import {useForm, Controller} from 'react-hook-form';
import {setReview} from '@/api/review';
import {load, save} from '@/helpers/localStorage';
import {KEY} from '@/helpers/key';

function ReviewForm({sku}: ReviewFormProps) {

	const [enabled, setEnabled] = useState<boolean>(false);
	const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<ReviewFormInterface>();
	const [open, setOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		const savedData = load<{ name: string, email: string }>(KEY);
		if (savedData) {
			reset({
				name: savedData.name,
				email: savedData.email
			});
		}
	}, []);

	const sendReview = async (data: ReviewFormInterface) => {
		const res = await setReview(sku, data);
		if (res) {
			setMessage(res.message);
			setOpen(true);
		}
		if (enabled) {
			const dataToSave = {name: data.name, email: data.email};
			save(KEY, JSON.stringify(dataToSave));
		}
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(sendReview)} className={styles['reviews-form']}>
				<div className={styles['review']}>
					<Textarea
						{...register('review', {required: {value: true, message: 'Заполните отзыв'}})}
						placeholder={errors.review ? '' : 'Отзыв*'}/>
					{errors.review &&
						<span className={styles['error-message']}>{errors.review.message}</span>}
				</div>
				<div className={styles['name']}>
					<Input
						{...register('name', {required: {value: true, message: 'Заполните имя'}})}
						placeholder={errors.name ? '' : 'Ваше имя*'}/>
					{errors.name &&
						<span className={styles['error-message']}>{errors.name.message}</span>}
				</div>
				<div className={styles['email']}>
					<Input
						{...register('email', {required: {value: true, message: 'Заполните email'}})}
						type={'email'}
						placeholder={errors.email ? '' : 'Ваш email*'}/>
					{errors.email &&
						<span className={styles['error-message']}>{errors.email.message}</span>}
				</div>
				<div className={styles['check']}>
					<Checkbox checked={enabled} onChange={setEnabled} className={cn(styles['checkbox'], {
						[styles['checked']]: enabled
					})}>
						<CheckIcon className={styles['check-icon']}/>
					</Checkbox>
					Сохранить данные для следующих отзывов
				</div>
				<div className={styles['rating']}>
					Рейтинг*
					<Controller
						control={control}
						name={'rating'}
						rules={{required: {value: true, message: 'Укажите рейтинг'}}}
						render={({field}) => (
							<Rating ref={field.ref} rating={field.value} setRating={field.onChange} isEditable/>)}
					/>
					{errors.rating &&
						<span className={styles['error-message']}>{errors.rating.message}</span>}
				</div>
				<Button onClick={() => clearErrors()} color={'black'}>Отправить</Button>
			</form>
			<Notice open={open} setOpen={setOpen}>{message}</Notice>
		</>
	);
}

export default ReviewForm;