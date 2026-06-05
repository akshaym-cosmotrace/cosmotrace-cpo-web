export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Overview', href: '/services' },
      { label: 'Serialization', href: '/serialization' },
      { label: 'Aggregation', href: '/aggregation' },
      { label: 'Warehousing', href: '/warehousing' },
    ],
  },
  { label: 'Platform', href: '/platform' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Platform', href: '/platform' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks: NavLink[] = [
  { label: 'Serialization', href: '/serialization' },
  { label: 'Aggregation', href: '/aggregation' },
  { label: 'Warehousing', href: '/warehousing' },
  { label: 'UAE Tatmeen', href: '/compliance' },
  { label: 'GS1 Standards', href: '/compliance' },
  { label: 'EPCIS Framework', href: '/compliance' },
];

export function isNavActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isServicesActive(pathname: string): boolean {
  return (
    pathname === '/services' ||
    pathname.startsWith('/serialization') ||
    pathname.startsWith('/aggregation') ||
    pathname.startsWith('/warehousing')
  );
}
