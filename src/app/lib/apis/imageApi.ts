import { Photo } from '@/types/image';

interface FetchError extends Error {
  status?: number;
}

const CLIENT_ID = process.env.NEXT_PUBLIC_IMAGE_CLIENT_ID;

export const getImages = async ({
  pageParam,
}: {
  pageParam: { page: number };
}): Promise<Photo[]> => {
  const { page } = pageParam;

  try {
    const response = await fetch(
      typeof window !== 'undefined'
        ? `/api/get-image?page=${page}`
        : `https://api.unsplash.com/photos?client_id=${CLIENT_ID}&per_page=10&page=${page}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();

    return resData;
  } catch (error) {
    console.error('이미지 조회 에러', error);
    throw error;
  }
};
