import styles from './TopCardPage.module.css';
import './TopCardPage.css';
import {TopCardPageProps} from './TopCardPage.props';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Htag from '@/components/Htag/Htag';
import Discount from '@/components/Discount/Discount';
import Button from '@/components/Button/Button';
import Rating from '@/components/Rating/Rating';
import Social from '@/components/Social/Social';
import plural from 'plural-ru';
import {calculateOldPrice} from '@/helpers/oldPrice';
import FavoriteIcon from './icons/favotites-icon.svg';
import FavoritesAccentIcon from './icons/favorites-accent.svg';
import {useContext, useState} from 'react';
import {UserContext} from '@/context/user.context';

function TopCardPage({product, category}: TopCardPageProps) {

	const {toggleToFavorites, dataFavorites} = useContext(UserContext);
	const [count, setCount] = useState<number>(1);
	const {name, price, images, sku, description, reviews, discount} = product;

	const img = images.map(i => ({
		original: i,
		thumbnail: i
	}));

	const rating = reviews.reduce((acc, r) => acc += r.rating, 0) / reviews.length;
	const favorite = dataFavorites.find(f => f.sku === product.sku);

	return (
		<div className={styles['top']}>
			<div>
				<ImageGallery
					items={img}
					additionalClass={'gallery'}
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
				<div className={styles['name-block']}>
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
				<div className={styles['count-block']}>
					<div className={styles['count']}>
						<button onClick={() => setCount(c => c < 2 ? 1 : --c)}>-</button>
						{count}
						<button onClick={() => setCount(c => ++c)}>+</button>
					</div>
					<Button className={styles['count-button']}>Добавить в корзину</Button>
				</div>
				<div className={styles['rating-block']}>
					<div className={styles['rating']}>
						<Rating rating={rating}/>
						{reviews.length}&nbsp;
						{plural(reviews.length, 'отзыв', 'отзыва', 'отзывов')}
					</div>
					{description}
				</div>
				<div className={styles['social-block']}>
					<div className={styles['social']}>
						<button className={styles['favorite-button']}
							onClick={() => toggleToFavorites(product)}>
							{favorite
								? <FavoritesAccentIcon/>
								: <FavoriteIcon/>}
						</button>
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
	);
}

export default TopCardPage;