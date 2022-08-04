import React from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  const navBarList = ["Home", "Blog", "Write", "About", "Contact"];

  return (
    <>
      <div className="fixed w-full">
        <div className="z-50 col-start-1 col-end-13 row-start-1 row-end-1 h-[50px] bg-[#d0daa0] object-fill pt-2 text-lg text-black">
          <div className=" flex w-full items-center justify-center lg:ml-0 lg:justify-start">
            <div className="ml-10 flex w-1/2 justify-end lg:justify-start">
              <Link href="/">
                <div className="cursor-pointer text-xl md:text-3xl">Logo</div>
              </Link>
            </div>
            <div className="flex w-1/2 justify-end lg:hidden">
              <Hamburger />
            </div>
            <div className="mr-7 hidden w-1/2 items-end justify-end lg:flex">
              {navBarList.map((array) => {
                const space =
                  navBarList[navBarList.length - 1] === array ? " " : "mr-16";

                return (
                  <Link
                    key={array}
                    href={
                      `${array.toLowerCase()}` === "home"
                        ? `/`
                        : `/${array.toLowerCase()}`
                    }
                  >
                    <a className={space}>{array}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
