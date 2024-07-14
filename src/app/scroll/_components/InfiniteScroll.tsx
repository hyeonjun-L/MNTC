'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useMemo } from 'react';
import { getImages } from '@/app/lib/apis/imageApi';
import useIntersect from '@/hooks/useIntersect';
import { Photo } from '@/types/image';

const InfiniteScroll = ({ images: initialImages }: { images: Photo[] }) => {
  const {
    data: imagesData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['images'],
    queryFn: getImages,
    initialPageParam: { page: 1 },
    initialData: () => {
      return {
        pages: [initialImages],
        pageParams: [{ page: 1 }],
      };
    },
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length;
      return {
        page: currentPage + 1,
      };
    },
  });

  const fetchNextPageHandler = async () => {
    if (isFetchingNextPage) return;
    await fetchNextPage();
  };

  const { ref } = useIntersect(fetchNextPageHandler, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const images = useMemo(
    () => imagesData?.pages.flatMap((page) => page) ?? [],
    [imagesData],
  );

  const previousImagesCount =
    images.length - (imagesData?.pages.slice(-1)[0]?.length || 0);

  return (
    <main className="mt-14 h-full">
      <ul className="grid gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {images.map(({ id, urls, alternative_slugs }, index) => (
          <li
            ref={index === images.length - 1 && hasNextPage ? ref : undefined}
            key={id + index}
            className={`relative aspect-square ${index >= previousImagesCount ? 'animate-fadeInUp' : ''}`}
          >
            <Image
              src={urls.small_s3}
              alt={alternative_slugs.ko}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </li>
        ))}
        {isFetchingNextPage &&
          Array.from({ length: 10 }, (_, index) => (
            <li
              key={index}
              className="relative aspect-square h-full w-full animate-pulse bg-gray-300"
            />
          ))}
      </ul>
    </main>
  );
};

export default InfiniteScroll;
