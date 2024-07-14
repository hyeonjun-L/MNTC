import Image from 'next/image';
import PaginationController from './PaginationController';
import { Photo } from '@/types/image';
import Link from 'next/link';

interface PaginationProps {
  images: Photo[];
  currentPage: number;
}

const Pagination = ({ images, currentPage }: PaginationProps) => {
  images = currentPage !== 6 ? images : images.slice(0, 6);

  return (
    <main className="mt-14">
      <ul className="grid gap-4 px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {images.map(({ id, urls, alternative_slugs }, index) => (
          <li
            key={id + index}
            className="relative aspect-square animate-fadeInUp shadow-[8px_8px_16px_#5a5a5a,-8px_-8px_16px_#ffffff]"
          >
            <Link
              href={`/photos?image=${urls.regular}`}
              scroll={false}
              className="group"
            >
              <div className="absolute left-0 top-0 z-10 hidden size-full backdrop-brightness-75 group-hover:block" />
              <Image
                src={urls.small_s3}
                alt={alternative_slugs.ko}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=="
              />
            </Link>
          </li>
        ))}
      </ul>
      <PaginationController currentPage={currentPage} />
    </main>
  );
};

export default Pagination;
