import Image from 'next/image';

export default function Ads() {
  return (
    <Image
      src="/img/class.webp"
      alt="Google สายเทา"
      width={600}
      height={300}
      loading="lazy"
         className='imgfb'
    />
  );
}
