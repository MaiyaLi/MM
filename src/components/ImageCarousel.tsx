import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function ImageCarousel({ images, interval = 3000, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
}
