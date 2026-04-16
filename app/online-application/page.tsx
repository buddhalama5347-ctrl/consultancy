import { OnlineApplication } from "@/components/online-application";
import { seoMetadata } from '@/lib/seo';

export const metadata = seoMetadata({
  pageTitle: 'Online Application',
  description:
    'Apply online with Exact Education: submit your details, documents, and application requests for study abroad support.',
  path: '/online-application',
});

export default function OnlineApplicationPage() {
  return <OnlineApplication />;
}