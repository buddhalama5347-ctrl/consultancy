import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  pageTitle: 'Study Destinations',
  description:
    'Explore world-class study destinations across popular countries with Exact Education guidance.',
  path: '/destinations',
});

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

