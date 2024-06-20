import React, { useState } from "react";
import ShoeThumbnail1 from "/image-product-1.jpg";
import ShoeThumbnail2 from "/image-product-2.jpg";
import ShoeThumbnail3 from "/image-product-3.jpg";
import ShoeThumbnail4 from "/image-product-4.jpg";
import previous from "/icon-previous.svg";
import NextPic from "/icon-next.svg";
import Zoomedimage from "./Zoomedimage";
import PriceCalc from "./PriceCalc";
import Cart from "./Cart";

const imgs = [ShoeThumbnail1, ShoeThumbnail2, ShoeThumbnail3, ShoeThumbnail4];

export default function MainPage({
  qnty,
  setQnty,
  price,
  show,
  setShow,
  cartShowen,
}: {
  qnty: number;
  setQnty: React.Dispatch<React.SetStateAction<number>>;
  show: number;
  setShow: React.Dispatch<React.SetStateAction<number>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  cartShowen: boolean;
  setCartShowen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openZoom = (index: React.SetStateAction<number>) => {
    setSelectedSlide(index);
    setIsZoomed(true);
  };

  const closeModal = () => {
    setIsZoomed(false);
  };

  const slideWidth = selectedSlide * 100;

  return (
    <>
      <main className="flex flex-col  w-fit items-center justify-center relative lg:w-full lg:flex-row lg:items-center lg:gap-[125px]">
        <section className="w-full flex flex-col justify-center items-center lg:w-fit">
          <div className="max-sm:hidden lg:block">
            <div className="flex sm:hidden lg:block">
              <div className="relative max-w-3xl w-full bg-white rounded-lg p-4 sm:hidden lg:block">
                <div className="relative w-full overflow-hidden lg:w-[445px]">
                  <div className="flex transition-transform duration-700 ease-in-out">
                    <img
                      className="min-w-full object-cover rounded-[10px]"
                      src={imgs[selectedSlide]}
                      alt={`Shoe ${selectedSlide + 1}`}
                    />
                  </div>
                  <div className="flex w-full justify-between mt-4">
                    {imgs.map((img, index) => (
                      <img
                        key={index}
                        className="w-[88px] h-[88px] object-cover m-2 cursor-pointer rounded-[10px]"
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setSelectedSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for zoomed image view */}
            {isZoomed && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative">
                  <button
                    className="absolute top-0 right-0 m-4 text-white text-2xl"
                    onClick={closeModal}>
                    &times;
                  </button>
                  <img
                    className="max-w-full max-h-full rounded-lg"
                    src={imgs[selectedSlide]}
                    alt={`Zoomed Shoe ${selectedSlide + 1}`}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="lg:hidden md:block">
            <div className="relative">
              {cartShowen && <Cart show={show} price={price} />}
              <div className="overflow-hidden z-0 lg:overflow-hidden lg:w-[445px] lg:flex lg:justify-center lg:items-center">
                <div
                  style={{ transform: `translateX(-${slideWidth}%)` }}
                  className="img flex relative transition-all duration-700 ease-in-out min-w-screen max-w-screen bg-black w-full">
                  {imgs.map((img, index) => (
                    <img
                      key={index}
                      className="flex items-center justify-center min-w-screen max-w-screen object-cover cursor-pointer"
                      src={img}
                      alt={`Shoe Thumbnail ${index + 1}`}
                      onClick={() => openZoom(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="">
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
              </div>
            </div>
          </div>
        </section>
        {isZoomed && (
          <Zoomedimage
            isOpen={isZoomed}
            selectedSlide={selectedSlide}
            closeModal={closeModal}
            display={undefined}
          />
        )}
        <section className="flex flex-col w-fit justify-center items-center">
          <div className="tittle px-6 w-full flex flex-col lg:flex lg:flex-col lg:items-center lg:justify-center">
            <h3 className="mt-[24px] mb-[19px] text-[#FF7E1B] font-[Kumbh_Sans] text-[12px] not-italic leading-[normal] tracking-[1.846px] uppercase lg:text-[14px] lg:pr-[335px]">
              Sneaker Company
            </h3>
            <h2
              className="mb-[15px] text-[#1D2026] font-[Kumbh_Sans] text-[28px] not-italic leading-[32px]
             lg:max-w-[500px] lg:text-[44px] lg:leading-[48px]">
              Fall Limited Edition Sneakers
            </h2>
            <p className="text-[#69707D] font-[Kumbh_Sans] text-[15px] not-italic leading-[25px] lg:max-w-[400px] lg:font-[17px] lg:mr-[100px] lg:mt-[10px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="price flex flex-row items-center justify-between lg:flex lg:items-end lg:justify-end lg:lg:pr-[335px]">
              <div className="flex flex-col items-start justify-center">
                <h2 className="mt-[10px] text-[#1D2026] font-[Kumbh_Sans] text-[28px] not-italic leading-[normal]">
                  ${price.toFixed(2)}
                  <span className="text-[#FF7E1B] font-[Kumbh_Sans] text-[16px] not-italic leading-[normal] rounded-[6px] bg-[#FFEEE2] px-2 py-1 mb-[20px] ml-[15px]">
                    50%
                  </span>
                </h2>

                <p className="text-decoration: line-through text-[#B6BCC8] font-[Kumbh_Sans] text-[16px] not-italic leading-[26px] mt-[10px] ">
                  $250.00
                </p>
              </div>
            </div>
            <PriceCalc
              qnty={qnty}
              setQnty={setQnty}
              setShow={setShow}
            />
          </div>
        </section>
      </main>
    </>
  );
}
