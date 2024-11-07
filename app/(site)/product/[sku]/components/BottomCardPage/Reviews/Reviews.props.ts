import {Review} from '@/interfaces/products.interface';
import {HTMLAttributes} from 'react';

export interface ReviewsProps extends HTMLAttributes<HTMLDivElement> {
	reviews: Review[];
}