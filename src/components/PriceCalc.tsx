import React from "react";
import { useState } from "react";
import Minus from "/public/icon-minus.svg";
import Plus from "/public/icon-plus.svg";
import Cart from "/public/icon-cart.svg";
import Header from "./Header";

interface PricePropsType {
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}
export default function PriceCalc({
  price,
  setPrice,
  qnty,
  setQnty,
  show,
  setShow
}: {
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  qnty: number;
  setQnty: React.Dispatch<React.SetStateAction<number>>;
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {

  return (
    <>
      <main>
        <section className="flex flex-col items-center justify-center mt-[27px]">
          <div className="flex flex-row items-center justify-between w-[327px] h-[56px] flex-shrink-0 rounded-[10px] bg-[#F6F8FD] mb-[20px]">
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
          <button className="rounded-[10px] bg-[#FF7E1B] [box-shadow:0px_20px_50px_-20px_#FF7E1B] w-[327px] h-[56px] flex-shrink-0 flex flex-row justify-center items-center gap-3" onClick={() =>{
            setShow(true)
          }}>
            <img
              className="w-[17.457px] h-[16px] fill-[#FFF]"
              src={Cart}
              alt="Cart"
            />
            <h2 className="text-[#FFF] font-[Kumbh_Sans] text-[16px] not-italic font-bold leading-[normal]">
              Add to card
            </h2>
          </button>
        </section>
      </main>
    </>
  );
}
