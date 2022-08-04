import React, { useContext } from "react";
import { MenuContext } from "./context/MenuBar";
import HambuerMenu from "./HambuerMenu";

const Hamburger = () => {
  const menuContext = useContext(MenuContext);

  const genericHamburgerLine: string = `h-[0.125rem] w-7 my-1 bg-black transition ease transform duration-300`;

  const click = menuContext?.open ? true : false;

  return (
    <div>
      <button
        className="mr-6 flex flex-col items-center justify-center lg:hidden"
        onClick={() => menuContext?.setOpen(!menuContext?.open)}
      >
        <div
          className={`${genericHamburgerLine} ${
            menuContext?.open ? "translate-y-2.5 rotate-45" : " "
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            menuContext?.open ? "opacity-0" : " "
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            menuContext?.open ? "-translate-y-2.5 -rotate-45  " : " "
          }`}
        />
      </button>

      <HambuerMenu isClicked={click} />
    </div>
  );
};

export default Hamburger;
