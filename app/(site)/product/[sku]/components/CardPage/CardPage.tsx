'use client';

import styles from './CardPage.module.css';
// import './CardPage.css'
import {CardPageProps} from './CardPage.props';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Htag from '@/components/Htag/Htag';
import Button from '@/components/Button/Button';
import Discount from '@/components/Discount/Discount';
import Rating from '@/components/Rating/Rating';
import Social from '@/components/Social/Social';
import {calculateOldPrice} from '@/helpers/oldPrice';
import FavoriteIcon from './favotites-icon.svg';
import plural from 'plural-ru';
import {useState} from 'react';

function CardPage({product, category}: CardPageProps) {

	const [count, setCount] = useState<number>(1);
	const {name, price, images, sku, description, reviews, discount} = product;

	const img = images.map(i => ({
		original: i,
		thumbnail: i
	}));

	const rating = reviews.reduce((acc, r) => acc += r.rating, 0) / reviews.length;


	return (
		<div className={styles['wrapper']}>
			<div className={styles['body']}>
				<div>
					<ImageGallery
						items={img}
						showNav={false}
						showBullets={true}
						showPlayButton={false}
						showFullscreenButton={false}
						autoPlay={true}
						thumbnailPosition={'left'}
						slideInterval={10000}
					/>
				</div>
				<div className={styles['right-panel']}>
					<div className={styles['block']}>
						<div className={styles['name']}>
							<Htag tag={'h2'}>{name}</Htag>
							{!!discount && <Discount discount={discount}/>}
						</div>
						<div className={styles['price']}>
							{!!discount &&
								<div
									className={styles['old-price']}>${calculateOldPrice(price, discount).toFixed(2)}</div>}
							<div>$ {price.toFixed(2)}</div>
						</div>
					</div>
					<div className={styles['block']}>
						<div className={styles['rating']}>
							<Rating rating={rating}/>
							{reviews.length}&nbsp;
							{plural(reviews.length, 'отзыв', 'отзыва', 'отзывов')}
						</div>
						{description}
					</div>
					<div className={styles['count-block']}>
						<div className={styles['count']}>
							<button onClick={() => setCount(c => c < 2 ? 1 : --c)}>-</button>
							{count}
							<button onClick={() => setCount(c => ++c)}>+</button>
						</div>
						<Button className={styles['count-button']}>Добавить в корзину</Button>
					</div>
					<div>
						<div className={styles['social']}>
							<FavoriteIcon/>
							<hr/>
							<Social/>
						</div>
						<div className={styles['info']}>
							<div className={styles['sku']}>SKU:</div>
							{sku}
						</div>
						<div className={styles['info']}>
							<div className={styles['category']}>Категория:</div>
							{category}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardPage;