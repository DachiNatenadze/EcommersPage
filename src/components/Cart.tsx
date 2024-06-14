import React from "react";

export default function cart() {
  return (
    <>
      <main className="flex justify-center items-center">
        <section>
          <header className="px-1 py-1">
            <div className="w-[360px] h-[256px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_20px_50px_-20px_rgba(29,_32,_38,_0.50)]">
              <h2 className="px-[26px] py-6 text-[#1D2026] font-[Kumbh_Sans] text-[16px] not-italic font-bold leading-[normal]">
                Cart
              </h2>
              <span className="flex items-center justify-center mt-[70px] text-[#69707D] text-center font-[Kumbh_Sans] text-[16px] not-italic font-bold leading-[26px]">Your cart is empty.</span>
              
            </div>
          </header>
        </section>
      </main>
    </>
  );
}
