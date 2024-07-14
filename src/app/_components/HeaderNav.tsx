'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderNav = () => {
  const pathName = usePathname();

  return pathName !== '/' ? (
    <nav className="flex gap-4 text-lg">
      <Link
        href="/scroll"
        className={`${pathName === '/scroll' ? 'underline underline-offset-8' : ''}`}
      >
        Infinite Scroll
      </Link>
      <Link
        href="/pagination"
        className={`${pathName === '/pagination' ? 'underline underline-offset-8' : ''}`}
      >
        Pagination
      </Link>
      <Link href={'/'}>Solution</Link>
    </nav>
  ) : null;
};

export default HeaderNav;
