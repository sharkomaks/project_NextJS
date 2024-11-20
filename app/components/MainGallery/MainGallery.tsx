'use client';

import styles from './MainGallery.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import img1 from '@/public/img1.png';
import img2 from '@/public/img2.png';
import Button from '@/components/Button/Button';

function MainGallery() {

	const images = [
		{original: img1.src, originalAlt: 'Картинка модели с украшением'},
		{original: img2.src, originalAlt: 'Картинка модели с украшением'}
	];

	return (
		<div className={styles['wrapper']}>
			<ImageGallery
				items={images}
				showNav={false}
				showBullets={true}
				showPlayButton={false}
				showFullscreenButton={false}
				autoPlay={true}
				slideInterval={10000}
			/>
			<div className={styles['info']}>
				<span>Gold big hoops</span>
				<span className={styles['price']}>$ 68,00</span>
				<Button>Смотреть</Button>
			</div>
		</div>
	);
}

export default MainGallery;