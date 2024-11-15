import {FieldError} from 'react-hook-form';

export interface CheckboxProps {
	enabled: boolean;
	setEnabled: (enabled: boolean) => void;
	login?: boolean;
	error?: FieldError;
}