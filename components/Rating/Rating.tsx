import styles from './Rating.module.css';
import {RatingProps} from './Rating.props';
import StarIcon from './star-icon.svg';
import cn from 'classnames';
import {JSX, useState, useEffect, forwardRef, KeyboardEvent} from 'react';

const Rating = forwardRef<HTMLDivElement, RatingProps>(
	function Rating({rating, isEditable = false, setRating}, ref) {

		const fixedRating = Number(rating ? rating.toFixed() : 0);
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

		useEffect(() => {
			constructRating(fixedRating);
		}, [fixedRating]);

		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((_, i) => (
				<span key={i}
					  className={cn(styles['star'], {
						  [styles['filled']]: i < currentRating,
						  [styles['editable']]: isEditable
					  })}
					  onMouseEnter={() => changeDisplay(i + 1)}
					  onMouseLeave={() => changeDisplay(fixedRating)}
					  onClick={() => onClick(i + 1)}>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={e => handleKey(e, i + 1)}/>
				</span>
			));
			setRatingArray(updatedArray);
		};

		const changeDisplay = (i: number) => {
			if (!isEditable) return;
			constructRating(i);
		};

		const onClick = (i: number) => {
			if (!isEditable || !setRating) return;
			setRating(i);
		};

		const handleKey = (e: KeyboardEvent<SVGSVGElement>, i: number) => {
			if (e.code !== 'Space' && e.code !== 'Enter' || !setRating) return;
			setRating(i);
		};

		return (
			<div ref={ref} className={styles['wrapper']}>
				{ratingArray.map((r, i) => <span key={i}>{r}</span>)}
			</div>
		);
	});

export default Rating;