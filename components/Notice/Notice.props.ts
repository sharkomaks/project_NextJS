import {HTMLAttributes, ReactNode} from 'react';

export interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean;
	setOpen: (open: boolean) => void;
	children: ReactNode;
}