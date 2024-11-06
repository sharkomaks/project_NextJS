import styles from './Rating.module.css';
import {RatingProps} from './Rating.props';
import StarIcon from './star-icon.svg';
import cn from 'classnames';
import {useState, JSX, useEffect} from 'react';

function Rating({rating}: RatingProps) {

	const fixedRating = Number(rating.toFixed(0));
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(fixedRating);
	}, [fixedRating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((_, i) => (
			<span key={i} className={cn(styles['star'], {
				[styles['filled']]: i < currentRating
			})}>
				<StarIcon/>
			</span>
		));
		setRatingArray(updatedArray);
	};

	return (
		<div className={styles['wrapper']}>
			{ratingArray.map((r, i) => <span key={i}>{r}</span>)}
		</div>
	);
}

export default Rating;