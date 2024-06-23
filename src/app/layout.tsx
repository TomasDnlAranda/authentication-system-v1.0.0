import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Home',
	description: 'In this page, you can find out the main topic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="./logo.png" sizes="any" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
