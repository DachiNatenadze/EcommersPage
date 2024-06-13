import React from "react";
import { useState } from "react";
import Minus from "/public/icon-minus.svg";
import Plus from "/public/icon-plus.svg";

interface PricePropsType {
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}
export default function PriceCalc({ price, setPrice }: PricePropsType) {
  const [qnty, setQnty] = useState(Number);

  return (
    <>
      <main>
        <section className="flex flex-col items-center justify-center mt-[27px]">
          <div className="flex flex-row items-center justify-between w-[327px] h-[56px] flex-shrink-0 rounded-[10px] bg-[#F6F8FD] mb-[17px">
            <img
              src={Minus}
              alt=""
              onClick={() => {
                setQnty(qnty - 1);
              }}
            />
            <h2 className="text-[#1D2026] text-center font-[Kumbh_Sans] text-[16px] not-italic font-bold leading-[normal]">
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
          <button className="rounded-[10px] bg-[#FF7E1B] [box-shadow:0px_20px_50px_-20px_#FF7E1B] w-[327px] h-[56px] flex-shrink-0"></button>
        </section>
      </main>
    </>
  );
}
