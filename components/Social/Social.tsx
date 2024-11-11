import styles from './Social.module.css';
import {SocialProps} from './Social.props';
import LinkedInIcon from './icons/linkedin.svg';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import TwitterIcon from './icons/twitter.svg';
import Link from 'next/link';
import cn from 'classnames';

function Social({className, ...props}: SocialProps) {

	return (
		<div className={cn(styles['social'], className)} {...props}>
			<Link aria-label={'LinkedIn'} href={'/'}><LinkedInIcon/></Link>
			<Link aria-label={'Facebook'} href={'/'}><FacebookIcon/></Link>
			<Link aria-label={'Instagram'} href={'/'}><InstagramIcon/></Link>
			<Link aria-label={'Twitter'} href={'/'}><TwitterIcon/></Link>
		</div>
	);
}

export default Social;