import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  pageTitle: 'Universities',
  description:
    'Explore top universities worldwide and get expert guidance from Exact Education.',
  path: '/universities',
});

export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

