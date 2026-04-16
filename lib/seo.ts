import type { Metadata } from 'next';

export const BRAND_NAME = 'Exact Education';
export const BRAND_DOMAIN = 'https://exactedunep.com';

export function seoMetadata({
  pageTitle,
  description,
  path,
  image,
}: {
  pageTitle: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${BRAND_DOMAIN}${normalizedPath}`;
  const fullTitle = pageTitle.includes(BRAND_NAME)
    ? pageTitle
    : `${pageTitle} | ${BRAND_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      siteName: BRAND_NAME,
      images: image ? [image] : undefined,
    },
  };
}

