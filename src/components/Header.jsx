import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navBarList = ["Home", "Blog", "Write", "About", "Contact"];

  return (
    <>
      <div className="z-50 col-start-1 col-end-13 row-start-1 row-end-1 flex h-12 w-full items-center justify-end bg-main object-fill pt-2 text-lg text-black">
        <div className="flex w-1/2 items-center justify-start">
          <Link to="/">
            <div className="text-3xl">Logo</div>
          </Link>
        </div>
        {console.log(navBarList[navBarList.length - 1])}
        <div className="flex w-1/2 items-center justify-end">
          {navBarList.map((array) => {
            const space =
              navBarList[navBarList.length - 1] === array ? " " : "mr-16";
            console.log(space);
            return (
              <Link key={array} to={`${array.toLowerCase()}`} className={space}>
                {array}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
