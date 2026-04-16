import type { Metadata } from 'next';
import { interviewData } from '@/lib/interview-data';
import type { InterviewCountry } from '@/lib/interview-data';
import { seoMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const data = interviewData[resolvedParams.country as InterviewCountry];

  if (!data) {
    return seoMetadata({
      pageTitle: 'Interview Preparation',
      description:
        'Prepare for university and visa interviews with Exact Education coaching.',
      path: `/interview-preparation/${resolvedParams.country}`,
    });
  }

  return seoMetadata({
    pageTitle: `${data.country} Interview Preparation`,
    description: data.overview,
    path: `/interview-preparation/${resolvedParams.country}`,
    image: data.backgroundImage,
  });
}

export default function CountryInterviewPreparationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

