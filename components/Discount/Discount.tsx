import styles from './Discount.module.css';
import {DiscountProps} from './Discount.props';
import cn from 'classnames';

function Discount({discount, className, ...props}: DiscountProps) {

	return (
		<div className={cn(styles['discount'], className)} {...props}>- {discount}%</div>
	);
}

export default Discount;