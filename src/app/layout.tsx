import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
const noto = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Snowy window during winter',
	description: 'falling snow flake by Ahhyun Kim',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={noto.className}>{children}</body>
		</html>
	);
}
