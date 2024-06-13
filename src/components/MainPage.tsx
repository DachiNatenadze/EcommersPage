import React from "react";
import ShoeThumbnail from "/public/image-product-1-thumbnail.jpg";
import previous from "/public/icon-previous.svg";
import NextPic from "/public/icon-next.svg";

export default function MainPage() {
  return (
    <>
      <main>
        <section>
          <div className="img flex w-full relative">
            <img className="w-full" src={ShoeThumbnail} alt="Shoe Thumbnail" />
            <button className="absolute top-1/2 transform -translate-y-1/2 left-4 sm:left-6 lg:left-8 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              <img src={previous} alt="Previous" className="w-3 h-3" />
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-4 sm:right-6 lg:right-8 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              <img src={NextPic} alt="Next" className="w-3 h-3" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
