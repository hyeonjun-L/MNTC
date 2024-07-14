'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { getImages } from '@/app/lib/apis/imageApi';
import { Photo } from '@/types/image';
import useIntersect from '@/hooks/useIntersect';
import { useMemo } from 'react';

const InfiniteScroll = ({ images: initalImages }: { images: Photo[] }) => {
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
        pages: [initalImages],
        pageParams: [{ page: 1 }],
      };
    },
    getNextPageParam: (lastPage, allpages) => {
      const currentPage = allpages.length + 1;

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

  return (
    <main className="h-full">
      <ul className="grid gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {images.map(({ id, urls, alternative_slugs }, index) => (
          <li
            ref={index === images.length - 6 && hasNextPage ? ref : undefined}
            key={id + index}
            className="relative aspect-square"
          >
            <Image
              src={urls.small_s3}
              alt={alternative_slugs.ko}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default InfiniteScroll;
