import React from "react";
import { useState } from "react";
import Minus from "/public/icon-minus.svg";
import Plus from "/public/icon-plus.svg";
import Cart from "/public/icon-cart.svg";
import Header from "./Header";

export default function PriceCalc({
  qnty,
  show,
  setQnty,
  setShow,
}: {
  qnty: number;
  setQnty: React.Dispatch<React.SetStateAction<number>>;
  show: number;
  setShow: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <main>
        <section className="flex flex-col items-end justify-end mt-[27px] lg:items-center justify-center">
          <div className="lg:flex flex-row ">
            <div className="flex flex-row items-center justify-between w-[327px] h-[56px] flex-shrink-0 rounded-[10px] bg-[#F6F8FD] mb-[20px]  lg:flex flex-row w-[156px]">
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
            <button
              className="rounded-[10px] bg-[#FF7E1B] [box-shadow:0px_20px_50px_-20px_#FF7E1B] w-[327px] h-[56px] flex-shrink-0 flex flex-row justify-center items-center gap-3 lg: w-[270px]"
              onClick={() => {
                setShow(qnty);
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
          </div>
        </section>
      </main>
    </>
  );
}
