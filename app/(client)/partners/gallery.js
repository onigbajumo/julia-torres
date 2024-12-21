"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const Gallery = ({ images }) => {
  const [currentImages, setCurrentImages] = useState(images.slice(0, 9));
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages.push(updatedImages.shift());
        return updatedImages;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const openFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className={`row-span-${index % 2 === 0 ? "3" : "4"}`}
          >
            <Image
              src={image}
              width={1000}
              height={1000}
              alt={`image-${index}`}
              className="w-full h-full object-cover cursor-pointer rounded-md"
              onClick={() => openFullScreen(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
          onClick={closeFullScreen}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              width={1000}
              height={1000}
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={closeFullScreen}
              className="absolute top-4 right-4 text-white text-xl bg-secondary aspect-square p-2 rounded-full w-6 h-6 grid place-content-center"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
