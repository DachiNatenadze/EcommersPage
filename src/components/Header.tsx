import React from "react";
import BurgerIcon from "/public/icon-menu.svg";
import Logo from "/public/logo.svg";
import CartImg from "/public/icon-cart.svg";
import avatar from "/public/image-avatar.png";
import Cart from "./Cart";

export default function Header({
  price,
  setPrice,
  show,
  setShow,
  cartShowen,
  setCartShowen,
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
  return (
    <>
      <header>
        <div className="flex  px-6 py-6 justify-between items-center lg:ml-[165px] lg:mr-[165px] lg:mb-[50px] lg:border-b-[1px_solid_#E4E9F2]">
          <div className="flex w-fit gap-4 items-center justify-center">
            <img
              className="h-[15px] lg:hidden"
              src={BurgerIcon}
              alt="BurgerIcon"
            />
            <img src={Logo} alt="SiteLogo" />
            <div className="max-sm:hidden max-md:hidden max-lg:hidden">
              <div className="ml-[50px] w-full flex flex-row items-center justify-center gap-9 text-[#69707D] font-[Kumbh_Sans] text-[15px] not-italic leading-[26px">
                <span className="text-[#69707D]">Collections</span>
                <span>Men</span>
                <span>Women</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </div>
          </div>

          <div className="flex w-fit gap-[25px] items-center justify-center">
            {cartShowen && (
              <Cart
                show={show}
                setShow={setShow}
                price={price}
                setPrice={setPrice}
              />
            )}
            <img
              className="w-[20px] h-[20px]"
              src={CartImg}
              alt="Icon of ShopCart"
              onClick={() => {
                setCartShowen(!cartShowen);
              }}
            />
            {show !== 0 ? (
              <div className="absolute right-[65px] top-5 lg:right-[250px] lg:top-8">
                <div className="rounded-[6.5px] bg-[#FF7E1B] w-[19px] h-[13px] flex-shrink-0 relative">
                  <span className="text-[#FFF] font-[Kumbh_Sans] text-[10px] not-italic font-bold leading-[normal] absolute left-[7px] top-[-1px] bottom-5">
                    {show}
                  </span>
                </div>
              </div>
            ) : null}
            <img
              className="w-[24px] h-[24px] lg:w-[50px] lg:h-[50px]"
              src={avatar}
              alt="Avatar of user"
            />
          </div>
        </div>
      </header>
    </>
  );
}
