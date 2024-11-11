import type {Metadata} from 'next';
import React from 'react';
import {DM_Sans} from 'next/font/google';
import './globals.css';
import Wrapper from './components/Wrapper/Wrapper';

const inter = DM_Sans({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Shoppe App',
	description: 'Shoppe App'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<Wrapper>
					{children}
				</Wrapper>
			</body>
		</html>
	);
}