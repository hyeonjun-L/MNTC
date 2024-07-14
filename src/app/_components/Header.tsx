import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className="fixed z-10 flex w-full justify-between bg-white p-3">
      <h1 className="text-2xl">Yune Projects 이현준</h1>
      <HeaderNav />
    </header>
  );
};

export default Header;
