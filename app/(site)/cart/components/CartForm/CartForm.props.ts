import {FormHTMLAttributes} from 'react';

export interface CartFormProps extends FormHTMLAttributes<HTMLFormElement> {
	totalPrice: number;
}