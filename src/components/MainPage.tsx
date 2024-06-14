import React, { useState } from "react";
import ShoeThumbnail1 from "/public/image-product-1.jpg";
import ShoeThumbnail2 from "/public/image-product-2.jpg";
import ShoeThumbnail3 from "/public/image-product-3.jpg";
import ShoeThumbnail4 from "/public/image-product-4.jpg";
import previous from "/public/icon-previous.svg";
import NextPic from "/public/icon-next.svg";
import Zoomedimage from "./Zoomedimage";
import PriceCalc from "./PriceCalc";

const imgs = [ShoeThumbnail1, ShoeThumbnail2, ShoeThumbnail3, ShoeThumbnail4];

export default function MainPage({
  qnty,
  setQnty,
  price,
  setPrice,
  show,
  setShow,
}: {
  qnty: number;
  setQnty: React.Dispatch<React.SetStateAction<number>>;
  show: number;
  setShow: React.Dispatch<React.SetStateAction<number>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}) {
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
          <div className="tittle px-6">
            <h3 className="mt-[24px] mb-[19px] text-[#FF7E1B] font-[Kumbh_Sans] text-[12px] not-italic font-bold leading-[normal] tracking-[1.846px] uppercase">
              Sneaker Company
            </h3>
            <h2 className="mb-[15px] text-[#1D2026] font-[Kumbh_Sans] text-[28px] not-italic font-bold leading-[32px]">
              Fall Limited Edition Sneakers
            </h2>
            <p className="text-[#69707D] font-[Kumbh_Sans] text-[15px] not-italic font-normal leading-[25px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="price flex flex-row items-center justify-between">
              <div className="flex flex-row items-end">
                <h2 className="mt-[10px] text-[#1D2026] font-[Kumbh_Sans] text-[28px] not-italic font-bold leading-[normal]">
                  ${price.toFixed(2)}
                </h2>
                <h2 className="text-[#FF7E1B] font-[Kumbh_Sans] text-[16px] not-italic font-bold leading-[normal] rounded-[6px] bg-[#FFEEE2] px-2 py-1 mb-[5px] ml-[15px]">
                  50%
                </h2>
              </div>
              <p className="text-decoration: line-through text-[#B6BCC8] font-[Kumbh_Sans] text-[16px] not-italic font-bold leading-[26px] mt-[15px] ">
                $250.00
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
