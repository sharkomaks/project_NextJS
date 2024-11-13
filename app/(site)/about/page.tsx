import styles from './About.module.css';
import Htag from '@/components/Htag/Htag';

function About() {

	return (
		<div className={styles['wrapper']}>
			<div className={styles['about']}>
				<Htag tag={'h1'}>О нас</Htag>
				<Htag tag={'h3'}>Мы делаем шикарные украшения для вас</Htag>
			</div>
			<div>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam
				fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
				placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.
			</div>
			<div className={styles['block']}>
				<Htag tag={'h2'}>Тренды в украшениях</Htag>
				<img src="/img3.png" alt=""/>
			</div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
				sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
				consequat sed eu felis.
				<ul>
					<li>consectetur adipiscing elit. Aliquam placerat</li>
					<li>Lorem ipsum dolor sit amet consectetur</li>
				</ul>
			</div>
			<div className={styles['block']}>
				<Htag tag={'h2'}>Сделано с любовью</Htag>
				<img src="/img2.png" alt=""/>
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
				sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
				consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.
			</div>
		</div>
	);
}

export default About;