import img1 from "/public/image-product-1.jpg";

export default function cart({ price, show }: { show: number; price: number }) {
  console.log(show);
  return (
    <>
      <main className="flex justify-center items-center absolute left-[50%] translate-x-[-50%] z-50 lg:left-[85%] lg:top-[8%] ">
        <section>
          <header className="px-1 py-1">
            <div className="w-[360px] h-[256px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_20px_50px_-20px_rgba(29,_32,_38,_0.50)]">
              <h2 className="px-[26px] py-6 text-[#1D2026] font-[Kumbh_Sans] text-[16px] not-italic leading-[normal]">
                Cart
              </h2>
              {show === 0 ? (
                <span className="flex items-center justify-center mt-[70px] text-[#69707D] text-center font-[Kumbh_Sans] text-[16px] not-italic leading-[26px]">
                  Your cart is empty.
                </span>
              ) : (
                <div className="flex flex-col ml-[25px] mt-[35px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="mr-[16px]">
                      <img
                        className="w-[50px] h-[50px] flex-shrink-0 rounded-[4px]"
                        src={img1}
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="shoeName text-[#69707D] font-[Kumbh_Sans] text-[16px] not-italic leading-[26px]">
                        <h2>Fall Limited Edition Sneakers</h2>
                      </div>
                      <div className="Price">
                        <h2 className=" text-[#69707D] font-[Kumbh_Sans] text-[16px] not-italic leading-[26px]">
                          $125.00 x <span>{show}</span>{" "}
                          <span className="text-[#1D2026] font-[Kumbh_Sans] text-[16px] not-italic leading-[26px]">
                            ${price * show}
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <button className="mt-[24px] rounded-[10px] bg-[#FF7E1B] w-[312px] h-[56px] flex-shrink-0">
                    <h2 className="text-[#FFF] font-[Kumbh_Sans] text-[16px] not-italic leading-[normal]">
                      Checkout
                    </h2>
                  </button>
                </div>
              )}
            </div>
          </header>
        </section>
      </main>
    </>
  );
}
