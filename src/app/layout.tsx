import type { Metadata } from 'next';
import Head from 'next/head';

import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
const noto = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://snowy-window.vercel.app/')
	openGraph: {
		title: 'Interactive Winter Wonderland: Three.js Snowscape Project',
		description: `Winter Wonderland by Ahhyun Kim :\n 
		Immerse yourself in a mesmerizing winter landscape with our Three.js-based project.\n
		Experience the serene beauty of falling snowflakes as you engage in the interactive challenge to clear accumulated snow.\n
		Unleash the magic of the season and join us in the virtual realm where the snowy scenery comes to life.\n
		Bundle up and embark on a unique journey of 'Clear the Snow' interaction amid a picturesque winter wonderland.`,
		siteName: 'Interactive Winter Wonderland',
		images: [
			{
				url: '/op-kakao.png',
				width: 285,
				height: 167,
				alt: 'Interactive Winter Wonderland',
			},
			{
				url: '/op-large.png',
				width: 800,
				height: 600,
				alt: 'Interactive Winter Wonderland',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en"> 
			<body className={noto.className}>{children}</body>
		</html>
	);
}
