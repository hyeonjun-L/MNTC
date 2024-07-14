import Image from 'next/image';
import getPlaceholderImage from '@/app/lib/utils/getBlurDataUrl';

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { image } = searchParams;

  const base64 = await getPlaceholderImage(image);

  return (
    <div className="m-auto">
      <Image
        src={image}
        alt="big-images"
        width={base64.width}
        height={base64.height}
        sizes="70vw"
        placeholder="blur"
        blurDataURL={base64.src}
        className="aspect-square w-[40rem]"
      />
    </div>
  );
};

export default page;
