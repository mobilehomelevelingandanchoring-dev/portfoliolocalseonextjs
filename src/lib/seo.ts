import { Metadata } from 'next';

const BASE_URL = 'https://www.localseoexpertskaty.com';

export function generatePageMetadata({
    title,
    description,
    path,
    image = '/icon.png',
    noIndex = false,
}: {
    title: string;
    description: string;
    path: string;
    image?: string;
    noIndex?: boolean;
}): Metadata {
    const url = `${BASE_URL}${path}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
    };
}
