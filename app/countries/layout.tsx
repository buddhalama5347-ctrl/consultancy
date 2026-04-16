import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad Countries | Exact Education Nepal",
  description:
    "Explore top study destinations including Australia, UK, USA, Canada, Japan and more with Exact Education. We provide expert guidance for students in Nepal applying to universities abroad.",

  keywords: [
    "Exact Education",
    "study abroad Nepal",
    "study in Australia Nepal",
    "study in UK Nepal",
    "study in Canada Nepal",
    "student visa consultancy Nepal",
  ],

  openGraph: {
    title: "Study Abroad Countries | Exact Education Nepal",
    description:
      "Discover the best countries to study abroad with expert guidance from Exact Education consultancy in Nepal.",
    url: "https://exactedunep.com/",
    siteName: "Exact Education",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}