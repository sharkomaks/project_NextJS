import styles from './BottomCardPage.module.css';
import {BottomCardPageProps} from './BottomCardPage.props';
import cn from 'classnames';
import ArrowIcon from './arrow-icon.svg';
import {motion} from 'framer-motion';
import {useState} from 'react';
import Reviews from './Reviews/Reviews';

function BottomCardPage({product}: BottomCardPageProps) {

	const {reviews, description, sku} = product;

	const [open, setOpen] = useState<[boolean, boolean]>([false, false]);

	const variants = {
		visible: {
			height: 'auto',
			opacity: 1,
			marginBottom: 20
		},
		hidden: {
			height: 0,
			opacity: 0
		}
	};

	return (
		<div className={styles['bottom']}>
			<hr className={styles['hr']}/>
			<button onClick={() => setOpen(o => [!o[0], false])}
				className={cn(styles['description-button'], {
					[styles['active']]: open[0]
				})}>
				Описание
				<ArrowIcon className={cn(styles['arrow'], {
					[styles['arrow-down']]: open[0]
				})}/>
			</button>
			<motion.div className={cn(styles['data'])}
				variants={variants}
				initial={open[0] ? 'visible' : 'hidden'}
				animate={open[0] ? 'visible' : 'hidden'}>
				{description}
			</motion.div>
			<hr className={cn(styles['hr'], styles['hr1'])}/>
			<button onClick={() => setOpen(o => [false, !o[1]])}
				className={cn(styles['reviews-button'], {
					[styles['active']]: open[1]
				})}>
				Отзывы ({reviews.length})
				<ArrowIcon className={cn(styles['arrow'], {
					[styles['arrow-down']]: open[1]
				})}/>
			</button>
			<motion.div className={cn(styles['data'])}
				variants={variants}
				initial={open[1] ? 'visible' : 'hidden'}
				animate={open[1] ? 'visible' : 'hidden'}>
				<Reviews reviews={reviews} sku={sku}/>
			</motion.div>
			<hr className={cn(styles['hr'], styles['hr2'])}/>
		</div>
	);
}

export default BottomCardPage;