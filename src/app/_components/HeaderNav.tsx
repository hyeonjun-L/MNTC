'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const HeaderNav = () => {
  const [navView, setNavView] = useState(false);
  const pathName = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);

  const closeNavView = () => {
    setNavView(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      closeNavView();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return pathName !== '/' ? (
    <>
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
      <button className="sm:hidden" onClick={() => setNavView(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="20px"
          height="20px"
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
        </svg>
      </button>
      {navView && (
        <nav
          ref={navRef}
          className="fixed right-0 top-0 flex h-dvh w-2/3 flex-col items-center justify-evenly bg-[#e0e0e0] sm:hidden"
        >
          <Link
            href="/scroll"
            className={`peer ${pathName === '/scroll' ? 'shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff] peer-hover:shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff]' : 'shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff]'} rounded-lg bg-[#e0e0e0] p-5 `}
            onClick={closeNavView}
          >
            Infinite Scroll
          </Link>
          <Link
            href="/pagination"
            className={`peer ${pathName === '/pagination' ? 'shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff] peer-hover:shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff]' : 'shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff]'} rounded-lg bg-[#e0e0e0] p-5 `}
            onClick={closeNavView}
          >
            Pagination
          </Link>
          <Link
            href="/solution"
            className={`peer ${pathName === '/solution' ? 'shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff] peer-hover:shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff]' : 'shadow-[8px_8px_16px_#a3a3a3,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff]'} rounded-lg bg-[#e0e0e0] p-5 `}
            onClick={closeNavView}
          >
            Solution
          </Link>
          <button className="absolute bottom-4 left-4" onClick={closeNavView}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="25.000000pt"
              height="25.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M62 3974 c-12 -8 -22 -23 -22 -32 0 -9 303 -320 672 -689 l673 -673
-694 -694 c-485 -485 -692 -698 -690 -711 2 -10 14 -25 27 -33 23 -15 34 -5
743 704 395 395 719 726 719 734 0 13 -1387 1410 -1400 1410 -3 0 -16 -7 -28
-16z"
                />
                <path
                  d="M3692 3974 c-12 -8 -22 -23 -22 -32 0 -9 303 -320 672 -689 l673
-673 -694 -694 c-485 -485 -692 -698 -690 -711 2 -10 14 -25 27 -33 23 -15 34
-5 743 704 395 395 719 726 719 734 0 13 -1387 1410 -1400 1410 -3 0 -16 -7
-28 -16z"
                />
                <path
                  d="M1867 3973 c-32 -31 -11 -53 660 -725 l668 -668 -688 -688 c-629
-629 -688 -691 -685 -718 2 -24 8 -30 32 -32 27 -3 89 56 738 705 560 560 708
713 708 733 0 37 -1363 1400 -1401 1400 -14 0 -29 -3 -32 -7z"
                />
              </g>
            </svg>
          </button>
        </nav>
      )}
    </>
  ) : null;
};

export default HeaderNav;
