'use client';

import styles from './RangeSelect.module.css';
import {RangeSelectProps} from './RangeSelect.props';
import Slider from 'react-slider';
import {useEffect, useState} from 'react';

function RangeSelect({max, setPriceRange, ...props}: RangeSelectProps) {

	const [value, setValue] = useState<[number, number]>([0, 100]);

	const number = (index: number) => {
		return (max * (value[index] / 100)).toFixed(0);
	};

	const minNum = number(0);
	const maxNum = number(1);

	useEffect(() => {
		setPriceRange({min: Number(minNum), max: Number(maxNum)});
	}, [minNum, maxNum]);

	return (
		<div {...props}>
			<Slider
				className={styles['horizontal-slider']}
				thumbClassName={styles['example-thumb']}
				trackClassName={styles['example-track']}
				value={value}
				onChange={setValue}
				ariaLabelledby={['first-slider-label', 'second-slider-label']}
				ariaValuetext={state => `Thumb value ${state.valueNow}`}
				renderThumb={({key, ...props}) => <div key={key} {...props}/>}
				pearling
				minDistance={3}/>
			<div className={styles['price']}>Цена: ${minNum} - ${maxNum}</div>
		</div>
	);
}

export default RangeSelect;