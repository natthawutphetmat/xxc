import Image from 'next/image';

export default function Example() {
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
