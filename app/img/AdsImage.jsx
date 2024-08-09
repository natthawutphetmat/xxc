import Image from 'next/image';

export default function AdsImage() {
  return (
    <Image
      src="/img/facebook_ads.webp"
      alt="Example Image"
      width={600}
      height={300}
      loading="lazy"
         className='imgfb'
    />
  );
}
