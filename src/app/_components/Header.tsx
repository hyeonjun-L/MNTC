import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className="flex justify-between p-3">
      <h1 className="text-2xl">Yune Projects 이현준</h1>
      <HeaderNav />
    </header>
  );
};

export default Header;
