import type { Metadata } from 'next';
import { universityData } from '@/lib/university-data';
import { seoMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const data =
    universityData[resolvedParams.country as keyof typeof universityData];

  if (!data) {
    return seoMetadata({
      pageTitle: 'Universities',
      description:
        'Explore top universities worldwide and get expert guidance from Exact Education.',
      path: `/universities/${resolvedParams.country}`,
    });
  }

  return seoMetadata({
    pageTitle: `Top Universities in ${data.country}`,
    description: `Discover world-class institutions in ${data.country} with expert guidance from Exact Education.`,
    path: `/universities/${resolvedParams.country}`,
    image: data.backgroundImage,
  });
}

export default function CountryUniversitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

