import PRODUCTLIST from '@/constants/constants';
import ProductList from './_components/ProductList';
import Search from './_components/Search';

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const filteredProducts = filterProducts(PRODUCTLIST, searchParams);

  return (
    <main className="mt-14 overflow-x-auto">
      <Search searchParams={searchParams} />
      <ProductList products={filteredProducts} />
    </main>
  );
};

export default page;

const filterProducts = (
  products: typeof PRODUCTLIST,
  searchParams: { [key: string]: string },
) => {
  return products.filter((product) => {
    return Object.entries(searchParams).every(([key, value]) => {
      if (!value) return true;

      switch (key) {
        case 'code':
          return product.productCode.toString() === value;
        case 'name':
          return product.productName.includes(value);
        case 'price-min':
          return product.price >= Number(value);
        case 'price-max':
          return product.price <= Number(value);
        case 'quantity-min':
          return product.stock >= Number(value);
        case 'quantity-max':
          return product.stock <= Number(value);
        case 'Net':
          return product.supplyPrice.toString() === value;
        case 'Material':
          return product.material.includes(value);
        case 'vat':
          return product.vat.toString() === value;
        case 'Delivery':
          return product.shippingCost.toString() === value;
        case 'Country':
          return product.origin.includes(value);
        case 'Warehousing':
          return product.arrivalLocation === value;
        case 'Fulfillment':
          return product.departureLocation === value;
        default:
          return true;
      }
    });
  });
};
