import styles from './Notice.module.css';
import {NoticeProps} from './Notice.props';
import CheckMarkIcon from './check-mark.svg';
import cn from 'classnames';
import {motion} from 'framer-motion';
import {useEffect} from 'react';


function Notice({open, setOpen, className, children}: NoticeProps) {

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setOpen(false);
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, [open, setOpen]);

	const variants = {
		visible: {
			opacity: 1,
			x: '-50%',
			y: 0,
			transition: {duration: 0.3}
		},
		hidden: {
			opacity: 0,
			x: '-50%',
			y: 20,
			transition: {duration: 0.3}
		}
	};

	return (
		<motion.div
			variants={variants} initial={'hidden'} animate={open ? 'visible' : 'hidden'}
			className={cn(styles['notice'], className)}>
			<CheckMarkIcon/>
			<div>{children}</div>
		</motion.div>
	);
}

export default Notice;