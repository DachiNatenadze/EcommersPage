import React from "react";
import BurgerIcon from "/public/icon-menu.svg";
import Logo from "/public/logo.svg";
import CartImg from "/public/icon-cart.svg";
import avatar from "/public/image-avatar.png";
import MainPage from "./MainPage";
import Cart from "./Cart";

export default function Header({
  qnty,
  setQnty,
  show,
  setShow,
}: {
  qnty: number;
  setQnty: React.Dispatch<React.SetStateAction<number>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <main>
        <header>
          <div className="flex px-6 py-6 justify-between items-center">
            <div className="flex w-fit gap-4 items-center justify-center">
              <img className="h-[15px]" src={BurgerIcon} alt="BurgerIcon" />
              <img src={Logo} alt="SiteLogo" />
            </div>
            <div className="flex w-fit gap-[25px]">
              <img
                className="w-[20px] h-[20px]"
                src={CartImg}
                alt="Icon of ShopCart"
              />
              {show !== 0 ? (
                <div className="absolute right-[65px] top-5">
                  <div className="rounded-[6.5px] bg-[#FF7E1B] w-[19px] h-[13px] flex-shrink-0 relative">
                    <span className="text-[#FFF] font-[Kumbh_Sans] text-[10px] not-italic font-bold leading-[normal] absolute left-[7px] top-[-1px] bottom-5">
                      {show}
                    </span>
                  </div>
                </div>
              ) : null}
              <img
                className="w-[24px] h-[24px]"
                src={avatar}
                alt="Avatar of user"
              />
            </div>
          </div>
        </header>
        <Cart />
        <MainPage />
      </main>
    </>
  );
}
