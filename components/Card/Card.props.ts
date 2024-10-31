import {HTMLAttributes} from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	img: string;
	name: string;
	price: number;
	oldPrice?: number;
	sale?: number;
	sold?: boolean;
	favorites?: boolean;
}