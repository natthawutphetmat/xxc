import Image from 'next/image';

export default function Cass() {
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
