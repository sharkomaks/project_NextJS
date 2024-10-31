import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';

function Button({color = 'white', className, children, ...props}: ButtonProps) {
	return (
		<button className={cn(styles['button'], styles[color], className)} {...props}>
			{children}
		</button>
	);
}

export default Button;