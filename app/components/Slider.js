"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6; // จำนวนรูปภาพทั้งหมด
  const visibleSlides = 3; // จำนวนรูปที่แสดงพร้อมกัน
  const imageUrls = [
    '/review/r1.webp',
    '/review/r2.webp',
    '/review/r3.webp',
    '/review/r4.webp',
    '/review/r5.webp',
    '/review/r6.webp',
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000); 

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}>
        {imageUrls.map((src, index) => (
          <div className="slide" key={index}>
             <Image src={src} alt={`รูปภาพ ${index + 1}`} width={400} height={600} />
          </div>
        ))}
      </div>
    </div>
  );
}


