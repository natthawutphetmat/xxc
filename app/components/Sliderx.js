"use client";

 
import { useState, useEffect } from 'react';

export default function Sliderx() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7; // จำนวนรูปภาพทั้งหมด
  const visibleSlides = 3; // จำนวนรูปที่แสดงพร้อมกัน
  const imageUrls = [
    '/review/review1.jpg',
    '/review/review2.jpg',
    '/review/review3.jpg',
    '/review/review4.jpg',
    '/review/review5.jpg',
    '/review/review6.jpg',
    '/review/review7.jpg',
  
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
            <img src={src} alt={`รูปภาพ ${index + 1}`} width={400}  />
          </div>
        ))}
      </div>
    </div>
  );
}
