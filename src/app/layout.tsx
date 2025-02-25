import type { Metadata } from 'next';
import './globals.css';
import { Lexend } from 'next/font/google';
import AnimatedNavbar from '@/components/Navbar';

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Donckers Florian',
	description: 'Portfolio of Donckers Florian',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={lexend.className}>
			<body
				className={`antialiased flex items-center justify-center bg-background overflow-x-hidden`}>
				<AnimatedNavbar />

				{children}

				{/* <DecorationAscii /> */}
			</body>
		</html>
	);
}
