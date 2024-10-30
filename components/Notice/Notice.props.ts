import {HTMLAttributes, ReactNode} from 'react';

export interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean;
	children: ReactNode;
}