import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navBarList = ["Home", "Blog", "Write", "About", "Contact"];

  return (
    <div className="fixed z-50 flex w-full items-start justify-end bg-main p-4 text-lg text-black">
      <Link to="/">
        <div className="absolute left-10 top-2 text-3xl">Logo</div>
      </Link>
      {navBarList.map((array) => {
        return (
          <Link to={`${array.toLowerCase()}`} className="mr-16">
            {array}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
