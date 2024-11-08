import {FormHTMLAttributes} from 'react';

export interface ReviewFormProps extends FormHTMLAttributes<HTMLFormElement> {
	sku: number;
}