import InfiniteScroll from './_components/InfiniteScroll';
import { getImages } from '../lib/apis/imageApi';

const page = async () => {
  const images = await getImages({ pageParam: { page: 1 } });

  return <InfiniteScroll images={images} />;
};

export default page;
