import { getImages } from '../lib/apis/imageApi';
import Pagination from './_components/Pagination';

const page = async ({
  searchParams,
}: {
  searchParams: { currentPage: string };
}) => {
  const currentPage = isNaN(Number(searchParams.currentPage))
    ? 1
    : Number(searchParams.currentPage);
  const images = await getImages({ pageParam: { page: currentPage } });

  return <Pagination images={images} currentPage={currentPage} />;
};

export default page;
