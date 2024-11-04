import styles from './Select.module.css';
import {SelectProps} from './Select.props';
import {Select as Component} from '@headlessui/react';
import cn from 'classnames';

function Select({option, className, ...props}: SelectProps) {
	return (
		<Component
			defaultValue=""
			aria-label={'category'}
			name={'category'}
			className={cn(styles['select'], className)}
			{...props}>
			<option value="" disabled hidden>Категория</option>
			{option && option.map(o => (
				<option key={o.id} value={o.id}>{o.name}</option>
			))}
		</Component>
	);
}

export default Select;