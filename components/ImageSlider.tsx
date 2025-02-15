"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-8/12 h-full">
      <Image
        src={images[currentImage]}
        alt="slider"
        width={1990}
        height={1080}
        className="w-full h-full object-cover"
        onError={() =>
          console.error(`Failed to load image: ${images[currentImage]}`)
        }
      />
    </div>
  );
}
