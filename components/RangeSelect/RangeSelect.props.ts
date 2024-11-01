import {HTMLAttributes} from 'react';

export interface RangeSelectProps extends HTMLAttributes<HTMLDivElement> {
	max: number,
	setPriceRange: (priceRange: { min: number, max: number }) => void
}