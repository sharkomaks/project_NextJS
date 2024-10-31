'use client';

import styles from './Switch.module.css';
import {Switch as Component} from '@headlessui/react';
import {useState} from 'react';

function Switch() {

	const [enable, setEnable] = useState<boolean>(false);

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