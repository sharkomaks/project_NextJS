import styles from './Review.module.css';
import {ReviewProps} from './Review.props';
import Rating from '@/components/Rating/Rating';
import {formatDate} from '@/helpers/formatDate';

function Review({review}: ReviewProps) {

	const {name, date, rating, description} = review;

	return (
		<>
			<div className={styles['review']}>
				<div className={styles['top']}>
					<div className={styles['name']}>{name}</div>
					<div>{formatDate(date)}</div>
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