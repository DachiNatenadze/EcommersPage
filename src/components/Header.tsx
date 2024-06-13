import React from "react";
import BurgerIcon from "/public/icon-menu.svg";
import Logo from "/public/logo.svg";
import CartImg from "/public/icon-cart.svg";
import avatar from "/public/image-avatar.png";

export default function Header() {
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
              <img
                className="w-[24px] h-[24px]"
                src={avatar}
                alt="Avatar of user"
              />
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
