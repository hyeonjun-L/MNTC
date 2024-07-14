import ProductList from './_components/ProductList';
import Search from './_components/Search';

const page = () => {
  return (
    <main className="mt-14 overflow-x-auto">
      <Search />
      <ProductList />
    </main>
  );
};

export default page;
