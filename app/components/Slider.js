"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6; // จำนวนรูปภาพทั้งหมด
  const visibleSlides = 3; // จำนวนรูปที่แสดงพร้อมกัน
  const imageUrls = [
    '/review/r1.jpg',
    '/review/r2.jpg',
    '/review/r3.jpg',
    '/review/r4.jpg',
    '/review/r5.jpg',
    '/review/r6.jpg',
  
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
            <img src={src} alt={`รูปภาพ ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
