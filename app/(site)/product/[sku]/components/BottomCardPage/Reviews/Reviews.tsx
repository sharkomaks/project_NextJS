import styles from './Reviews.module.css';
import {ReviewsProps} from './Reviews.props';
import Review from '@/components/Review/Review';

function Reviews({reviews}: ReviewsProps) {

	return (
		<div className={styles['reviews']}>
			<div>
				{reviews.map((r, i) => <Review key={i} review={r}/>)}
			</div>
			<div>
				1
			</div>
		</div>
	);
}

export default Reviews;