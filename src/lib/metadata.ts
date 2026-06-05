import type { Metadata } from 'next';

const siteName = 'CosmoTrace CPO';
const siteUrl = 'https://cosmotrace.com';

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = title.includes('CosmoTrace') ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: `${siteUrl}${path}`,
      siteName,
    },
  };
}
