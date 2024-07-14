'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderNav = () => {
  const pathName = usePathname();

  return pathName !== '/' ? (
    <nav className="flex gap-4 text-lg">
      <Link
        href="/scroll"
        className={`${pathName === '/scroll' ? 'underline underline-offset-4' : ''}`}
      >
        Infinite Scroll
      </Link>
      <Link href={'/'}>Pagination</Link>
      <Link href={'/'}>Solution</Link>
    </nav>
  ) : null;
};

export default HeaderNav;
