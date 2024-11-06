import {FormHTMLAttributes} from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	type: 'search' | 'email';
	setOpen?: (open: boolean) => void;
	submit?: (line: string) => void;
}