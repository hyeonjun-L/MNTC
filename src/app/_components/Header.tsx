import Link from 'next/link';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className="fixed z-10 flex w-full justify-between bg-white p-3">
      <Link href="/" className="text-2xl">
        Yune Projects 이현준
      </Link>
      <HeaderNav />
    </header>
  );
};

export default Header;
