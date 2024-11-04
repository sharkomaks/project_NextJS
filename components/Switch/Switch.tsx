'use client';

import styles from './Switch.module.css';
import {Switch as Component} from '@headlessui/react';
import {SwitchProps} from '@/components/Switch/Switch.props';

function Switch({enable, setEnable}: SwitchProps) {

	return (
		<Component
			checked={enable}
			onChange={setEnable}
			className={styles['field']}>
		  <span
			  aria-hidden="true"
			  className={styles['ball']}
		  />
		</Component>
	);
}

export default Switch;