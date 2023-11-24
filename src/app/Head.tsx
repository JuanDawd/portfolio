'use client';
import { usePathname } from 'next/navigation';

export default function Head() {
  const pathname = usePathname();

  const title = {
    '/': 'Home',
    '/projects': 'Projects',
  }[pathname];

  return (
    <head>
      <title>{`JuanDawd | ${title}`}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='' />
      <link rel='icon' href='/favicon.ico' />
    </head>
  );
}
