import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  pageTitle: 'Interview Preparation',
  description:
    'Ace your university and student visa interviews with Exact Education interview preparation guides, strategies, and country-specific coaching.',
  path: '/interview-preparation',
});

export default function InterviewPreparationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

