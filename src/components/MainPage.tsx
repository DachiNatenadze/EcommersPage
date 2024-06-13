import React from "react";
import { useState } from "react";
import ShoeThumbnail1 from "/public/image-product-1.jpg";
import ShoeThumbnail2 from "/public/image-product-2.jpg";
import ShoeThumbnail3 from "/public/image-product-3.jpg";
import ShoeThumbnail4 from "/public/image-product-4.jpg";
import previous from "/public/icon-previous.svg";
import NextPic from "/public/icon-next.svg";

const imgs = [ShoeThumbnail1, ShoeThumbnail2, ShoeThumbnail3, ShoeThumbnail4];

export default function MainPage() {
  const [selectedSlide, SetSelectedSlide] = useState(0);
  const slideWidth = selectedSlide * 100;
  return (
    <>
      <main className="w-full relative">
        <section className="w-full overflow-hidden">
          <div
            style={{ transform: `translateX(-${slideWidth}%)` }}
            className={`img flex  relative  transition-all duration-700 ease-in-out min-w-screen max-w-screen bg-black `}>
            {imgs.map((img, index) => {
              return (
                <img
                  key={index}
                  className="min-w-screen max-w-screen object-cover"
                  src={img}
                  alt="Shoe Thumbnail"
                />
              );
            })}
          </div>
          <button
            className="absolute top-1/2 w-[40px] h-[40px] transform -translate-y-1/2 left-4 sm:left-6 lg:left-8 bg-white rounded-full flex items-center justify-center shadow-md"
            onClick={() => {
              if (selectedSlide <= 1) {
                SetSelectedSlide(3);
              } else {
                SetSelectedSlide(selectedSlide - 1);
              }
            }}>
            <img src={previous} alt="Previous" className="w-3 h-3" />
          </button>
          <button
            className="absolute w-[40px] h-[40px] top-1/2 transform -translate-y-1/2 right-4 sm:right-6 lg:right-8 bg-white rounded-full flex items-center justify-center shadow-md"
            onClick={() => {
              if (selectedSlide >= 3) {
                SetSelectedSlide(0);
              } else {
                SetSelectedSlide(selectedSlide + 1);
              }
            }}>
            <img src={NextPic} alt="Next" className="w-3 h-3" />
          </button>
        </section>
      </main>
    </>
  );
}
