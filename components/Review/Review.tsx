import styles from './Review.module.css';
import {ReviewProps} from './Review.props';
import Rating from '@/components/Rating/Rating';

function Review({review}: ReviewProps) {

	const {name, date, rating, description} = review;

	const newDate = new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(date)).replace('г.', '');

	return (
		<>
			<div className={styles['review']}>
				<div className={styles['top']}>
					<div className={styles['name']}>{name}</div>
					<div>{newDate}</div>
				</div>
				<Rating rating={rating}/>
				<div className={styles['description']}>
					{description}
				</div>
			</div>
			<hr className={styles['hr']}/>
		</>
	);
}

export default Review;