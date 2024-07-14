'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderNav = () => {
  const pathName = usePathname();

  return pathName !== '/' ? (
    <nav className="hidden text-lg sm:flex">
      <Link
        href="/scroll"
        className={`peer ${pathName === '/scroll' ? 'underline underline-offset-8' : ''} px-2 hover:underline hover:underline-offset-8 peer-hover:no-underline`}
      >
        Infinite Scroll
      </Link>
      <Link
        href="/pagination"
        className={`peer ${pathName === '/pagination' ? 'underline underline-offset-8' : ''} px-2 hover:underline hover:underline-offset-8 peer-hover:no-underline`}
      >
        Pagination
      </Link>
      <Link
        href="/solution"
        className={`peer ${pathName === '/solution' ? 'underline underline-offset-8' : ''} px-2 hover:underline hover:underline-offset-8 peer-hover:no-underline`}
      >
        Solution
      </Link>
    </nav>
  ) : null;
};

export default HeaderNav;
