import sharp from 'sharp';

const getFileBufferRemote = async (url: string) => {
  const response = await fetch(url);
  return Buffer.from(await response.arrayBuffer());
};

const bufferToBase64 = (buffer: Buffer) => {
  return `data:image/png;base64,${buffer.toString('base64')}`;
};

const getPlaceholderImage = async (filepath: string) => {
  try {
    const originalBuffer = await getFileBufferRemote(filepath);
    const sharpInstance = sharp(originalBuffer);
    const resizedBuffer = await sharpInstance.resize(20).toBuffer();
    const metadata = await sharpInstance.metadata();

    return {
      src: filepath,
      width: metadata.width ?? 1000,
      height: metadata.height ?? 0,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch (error) {
    console.error(error);
    return {
      src: filepath,
      width: 1000,
      height: 1000,
      placeholder:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
    };
  }
};

export default getPlaceholderImage;
