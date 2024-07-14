import Image from 'next/image';
import getPlaceholderImage from '@/app/lib/utils/getBlurDataUrl';
import Modal from './_components/Modal';

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { image } = searchParams;

  const base64 = await getPlaceholderImage(image);

  return (
    <Modal>
      <Image
        src={image}
        alt="big-images"
        fill
        sizes="70vw"
        placeholder="blur"
        blurDataURL={base64.src}
      />
    </Modal>
  );
};

export default page;
