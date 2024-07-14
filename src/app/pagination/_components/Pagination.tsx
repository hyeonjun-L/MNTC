import Image from 'next/image';
import PaginationController from './PaginationController';
import { Photo } from '@/types/image';

interface PaginationProps {
  images: Photo[];
  currentPage: number;
}

const Pagination = ({ images, currentPage }: PaginationProps) => {
  return (
    <main className="mt-14">
      <ul className="grid gap-4 px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {images.map(({ id, urls, alternative_slugs }, index) => (
          <li
            key={id + index}
            className="animate-fadeInUp relative aspect-square"
          >
            <Image
              src={urls.small_s3}
              alt={alternative_slugs.ko}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </li>
        ))}
      </ul>
      <PaginationController currentPage={currentPage} />
    </main>
  );
};

export default Pagination;
