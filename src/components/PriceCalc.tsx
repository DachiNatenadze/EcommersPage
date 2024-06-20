import React from "react";
import Minus from "/icon-minus.svg";
import Plus from "/icon-plus.svg";
import Cart from "/icon-cart.svg";

export default function PriceCalc({
  qnty,
  setQnty,
  setShow,
}: {
  qnty: number;
  setQnty: React.Dispatch<React.SetStateAction<number>>;
  setShow: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleDecrement = () => {
    // Ensure qnty doesn't go below 0
    if (qnty > 0) {
      setQnty(qnty - 1);
    }
  };

  return (
    <>
      <main>
        <section className="flex flex-col items-center justify-start mt-[27px] lg:items-start lg:justify-start">
          <div className="lg:flex lg:flex-row">
            <div className="flex flex-row items-center justify-between w-[327px] h-[56px] flex-shrink-0 rounded-[10px] bg-[#F6F8FD] mb-[20px]  lg:flex lg::flex-row lg:w-[170px] lg:mr-[15px]">
              <img src={Minus} alt="" onClick={handleDecrement} />
              <h2 className="text-[#1D2026] text-center font-[Kumbh_Sans] text-[16px] not-italic leading-[normal]">
                {qnty}
              </h2>
              <img
                src={Plus}
                alt=""
                onClick={() => {
                  setQnty(qnty + 1);
                }}
              />
            </div>
            <button
              className="rounded-[10px] bg-[#FF7E1B] [box-shadow:0px_20px_50px_-20px_#FF7E1B] w-[327px] h-[56px] flex-shrink-0 flex flex-row justify-center items-center gap-3 lg:w-[270px]"
              onClick={() => {
                setShow(qnty);
              }}>
              <img
                className="w-[17.457px] h-[16px] fill-[#FFF]"
                src={Cart}
                alt="Cart"
              />
              <h2 className="text-[#FFF] font-[Kumbh_Sans] text-[16px] not-italic leading-[normal]">
                Add to cart
              </h2>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
