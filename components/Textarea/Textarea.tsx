import styles from './Textarea.module.css';
import {TextareaProps} from './Textarea.props';
import cn from 'classnames';
import {forwardRef} from 'react';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	function Textarea({className, ...props}, ref) {

		return (
			<textarea ref={ref} className={cn(styles['textarea'], className)} {...props}/>
		);
	});

export default Textarea;