import { productType } from '@/types/product';

const ProductList = ({ products }: { products: productType[] }) => {
  return (
    <div>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead className="sticky top-0 bg-gray-200">
          <tr>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              상품코드
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              상품명
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              가격
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              공급가
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              VAT
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              배송비
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              입고지
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              출고지
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              재고량
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              소재
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              원산지
            </th>
            <th className="whitespace-nowrap border border-gray-300 px-4 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productCode}>
              <td className="border border-gray-300 px-4 py-2">
                {product.productCode}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.productName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.supplyPrice}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.vat}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.shippingCost}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.arrivalLocation}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.departureLocation}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.stock}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.material}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.origin}
              </td>
              <td className="cursor-pointer border border-gray-300 px-4 py-2 text-blue-600 hover:underline">
                {product.actions}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
