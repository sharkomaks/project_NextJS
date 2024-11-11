import styles from './Reviews.module.css';
import {ReviewsProps} from './Reviews.props';
import Review from '@/components/Review/Review';
import Htag from '@/components/Htag/Htag';
import ReviewForm from '@/components/ReviewForm/ReviewForm';

function Reviews({reviews, sku}: ReviewsProps) {

	return (
		<div className={styles['reviews']}>
			<div>
				{reviews.map((r, i) => <Review key={i} review={r}/>)}
			</div>
			<div className={styles['form-panel']}>
				<Htag tag={'h3'}>Добавить отзыв</Htag>
				<div>Ваш email не будет опубликован. Обязательные поля помечены *</div>
				<ReviewForm sku={sku}/>
			</div>
		</div>
	);
}

export default Reviews;