import { NextRequest, NextResponse } from 'next/server';

const CLIENT_ID = process.env.NEXT_PUBLIC_IMAGE_CLIENT_ID;

export const GET = async (request: NextRequest) => {
  if (!CLIENT_ID) {
    return NextResponse.json({
      status: 500,
      message: '환경 변수가 설정되지 않았습니다.',
    });
  }

  const page = request.nextUrl.searchParams.get('page');

  if (page) {
    return NextResponse.json(
      {
        status: 400,
        message: '필요 값이 존재하지 않습니다.',
      },
      { status: 400 },
    );
  }

  const response = await fetch(
    `https://api.unsplash.com/photos?client_id=${CLIENT_ID}&per_page=10&page=${page}`,
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
    return NextResponse.json(
      {
        status: response.status,
        message: errorData.message || '서버 요청 오류',
      },
      { status: response.status },
    );
  }

  const result = await response.json();

  return NextResponse.json(result);
};
