import styles from './Checkbox.module.css';
import {CheckboxProps} from './Checkbox.props';
import CheckIcon from './check-icon.svg';
import {Checkbox as Component} from '@headlessui/react';
import cn from 'classnames';
import {forwardRef} from 'react';

const Checkbox = forwardRef<HTMLSpanElement, CheckboxProps>(
	function Checkbox({enabled, setEnabled, login = false, error = false}, ref) {
		return (
			<Component ref={ref}
					   checked={enabled ? enabled : false}
					   onChange={setEnabled}
					   className={cn(styles['checkbox'], {
						   [styles['login-checkbox']]: login,
						   [styles['checked']]: enabled,
						   [styles['error']]: error
					   })}>
				<CheckIcon className={styles['check-icon']}/>
			</Component>
		);
	});

export default Checkbox;