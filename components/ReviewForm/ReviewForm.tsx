import styles from './ReviewForm.module.css';
import {ReviewFormProps} from './ReviewForm.props';
import {ReviewFormInterface} from './ReviewForm.interface';
import {useContext, useEffect, useState} from 'react';
import Textarea from '@/components/Textarea/Textarea';
import Input from '@/components/Input/Input';
import Rating from '@/components/Rating/Rating';
import Button from '@/components/Button/Button';
import Notice from '@/components/Notice/Notice';
import Checkbox from '@/components/Checkbox/Checkbox';
import {useForm, Controller} from 'react-hook-form';
import {setReview} from '@/api/review';
import {load, save} from '@/helpers/localStorage';
import {dataKey} from '@/helpers/keys';
import {UserContext} from '@/context/user.context';

function ReviewForm({sku}: ReviewFormProps) {

	const {profile} = useContext(UserContext);
	const [enabled, setEnabled] = useState<boolean>(false);
	const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<ReviewFormInterface>();
	const [open, setOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		const savedData = load<{ name: string, email: string }>(dataKey);
		if (savedData && !profile) {
			reset({
				name: savedData.name,
				email: savedData.email
			});
		}
		if (profile) {
			reset({
				name: profile.name ? profile.name : '',
				email: profile.email
			});
		}
	}, [profile, reset]);

	const sendReview = async (data: ReviewFormInterface) => {
		const res = await setReview(sku, data);
		if (res) {
			setMessage(res.message);
			setOpen(true);
		}
		if (enabled) {
			const dataToSave = {name: data.name, email: data.email};
			save(dataKey, JSON.stringify(dataToSave));
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
				{!profile?.name && <div className={styles['name']}>
					<Input
						{...register('name', {required: {value: true, message: 'Заполните имя'}})}
						placeholder={errors.name ? '' : 'Ваше имя*'}/>
					{errors.name &&
						<span className={styles['error-message']}>{errors.name.message}</span>}
				</div>}
				{!profile?.email && <div className={styles['email']}>
					<Input
						{...register('email', {required: {value: true, message: 'Заполните email'}})}
						type={'email'}
						placeholder={errors.email ? '' : 'Ваш email*'}/>
					{errors.email &&
						<span className={styles['error-message']}>{errors.email.message}</span>}
				</div>}
				<div className={styles['check']}>
					<Checkbox enabled={enabled} setEnabled={setEnabled}/>
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