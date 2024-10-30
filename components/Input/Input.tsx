import styles from './Input.module.css';
import {InputProps} from './Input.props';
import cn from 'classnames';
import {forwardRef} from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input({className, ...props}, ref) {

		return (
			<input ref={ref} type="text" className={cn(styles['input'], className)} {...props}/>
		);
	});

export default Input;