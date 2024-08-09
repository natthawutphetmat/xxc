"use client";

 
import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Sliderx() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7; // จำนวนรูปภาพทั้งหมด
  const visibleSlides = 3; // จำนวนรูปที่แสดงพร้อมกัน
  const imageUrls = [
    '/review/review1.webp',
    '/review/review2.webp',
    '/review/review3.webp',
    '/review/review4.webp',
    '/review/review5.webp',
    '/review/review6.webp',
    '/review/review7.webp',
  
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
