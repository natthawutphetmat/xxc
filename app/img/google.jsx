import Image from 'next/image';

export default function Google() {
  return (
    <Image
      src="/img/head.webp"
      alt="Google สายเทา"
      width={600}
      height={300}
      loading="lazy"
      className='imgfb'
    />
  );
}
