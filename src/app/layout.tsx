import '@mantine/core/styles.css';
import './globals.css';

import type { Metadata } from 'next';
import ConvexUserProvider from '@/components/providers/ConvexUserProvider';
import ConvexClerkProvider from '@/components/providers/ConvexClerkProvider';
import MantineClientProvider from '@/components/providers/MantineClientProvider';

export const metadata: Metadata = {
	title: 'Talent Tree | Freelancing for Developers',
	description: 'Start Freelancing and Built your Career in Tech',
	authors: [
		{ name: 'Talent Tree', url: 'https://github.com/TalentTreeOSS' },
		{ name: 'ThatGuyJamal', url: 'https://github.com/ThatGuyJamal' },
	],
	keywords: [
		'freelance',
		'freelancing',
		'freelancer',
		'developer',
		'tech',
		'talent tree',
		'jobs',
		'career',
		'remote',
		'remote work',
		'remote jobs',
	],
	referrer: 'strict-origin-when-cross-origin',
	creator: 'Talent Tree Team',
	publisher: 'ThatGuyJamal',
	robots: {
		index: true, // Allow search engines to index the content
		follow: true, // Instruct search engines to follow links
		noarchive: false, // Allow search engines to show a cached version of the page
		nosnippet: false, // Allow search engines to display snippets
		noimageindex: true, // Allow search engines to index images on the page
		nocache: false, // Allow search engines to cache the content
		notranslate: true, // Allow search engines to translate the page
		indexifembedded: true, // Allow search engines to index the page if it's embedded
		nositelinkssearchbox: false, // Allow search engines to display a search box for the site
		unavailable_after: '', // Specify the date after which the content is unavailable
		'max-video-preview': 'none', // Set the maximum video preview size to none
		'max-image-preview': 'large', // Set the maximum image preview size to large
		'max-snippet': 50, // Set the maximum snippet length to 50 characters
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning={true}>
			<body>
				<ConvexClerkProvider>
					<ConvexUserProvider>
						<MantineClientProvider>{children}</MantineClientProvider>
					</ConvexUserProvider>
				</ConvexClerkProvider>
			</body>
		</html>
	);
}
