import React from "react";
import SideBar from "./SideBar";

interface Props {
  isClicked?: boolean;
}

const HambuerMenu = ({ isClicked }: Props) => {
  return (
    <div
      className={
        isClicked ? "block overflow-y-auto lg:hidden" : "hidden lg:hidden"
      }
    >
      <div className="absolute left-0 top-20 flex w-full flex-col items-center justify-center">
        <div className="flex w-[80%] flex-col justify-center overflow-auto">
          <SideBar display={isClicked} />
        </div>
      </div>
    </div>
  );
};

export default HambuerMenu;
