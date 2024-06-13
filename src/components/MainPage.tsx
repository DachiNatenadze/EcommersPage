import React, { useState } from "react";
import ShoeThumbnail1 from "/public/image-product-1.jpg";
import ShoeThumbnail2 from "/public/image-product-2.jpg";
import ShoeThumbnail3 from "/public/image-product-3.jpg";
import ShoeThumbnail4 from "/public/image-product-4.jpg";
import previous from "/public/icon-previous.svg";
import NextPic from "/public/icon-next.svg";
import Zoomedimage from "./Zoomedimage";

const imgs = [ShoeThumbnail1, ShoeThumbnail2, ShoeThumbnail3, ShoeThumbnail4];

export default function MainPage() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openZoom = (index) => {
    setSelectedSlide(index);
    setIsZoomed(true);
  };

  const closeModal = () => {
    setIsZoomed(false);
  };

  const slideWidth = selectedSlide * 100;

  return (
    <>
      <main className="w-full relative">
        <section className="w-full overflow-hidden">
          <div
            style={{ transform: `translateX(-${slideWidth}%)` }}
            className="img flex relative transition-all duration-700 ease-in-out min-w-screen max-w-screen bg-black">
            {imgs.map((img, index) => (
              <img
                key={index}
                className="min-w-screen max-w-screen object-cover cursor-pointer"
                src={img}
                alt={`Shoe Thumbnail ${index + 1}`}
                onClick={() => openZoom(index)}
              />
            ))}
          </div>
          <button
            className="absolute top-1/2 w-[40px] h-[40px] transform -translate-y-1/2 left-4 sm:left-6 lg:left-8 bg-white rounded-full flex items-center justify-center shadow-md"
            onClick={() =>
              setSelectedSlide((prev) => (prev <= 0 ? 3 : prev - 1))
            }>
            <img src={previous} alt="Previous" className="w-3 h-3" />
          </button>
          <button
            className="absolute w-[40px] h-[40px] top-1/2 transform -translate-y-1/2 right-4 sm:right-6 lg:right-8 bg-white rounded-full flex items-center justify-center shadow-md"
            onClick={() =>
              setSelectedSlide((prev) => (prev >= 3 ? 0 : prev + 1))
            }>
            <img src={NextPic} alt="Next" className="w-3 h-3" />
          </button>
        </section>
      </main>
      {isZoomed && (
        <Zoomedimage
          isOpen={isZoomed}
          selectedSlide={selectedSlide}
          closeModal={closeModal}
        />
      )}
      <main>
        <section>
          <div className="tittle">
            <h2></h2>
          </div>
        </section>
      </main>
    </>
  );
}
