import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-main fixed z-50 flex w-full items-start justify-end p-4 text-xl text-black">
      <div className="absolute left-10 top-2 text-3xl">Logo</div>
      <Link to="/" className="mr-16">
        Home
      </Link>
      <Link to="/write" className="mr-16">
        Write
      </Link>
      <Link to="/about" className="mr-16">
        About
      </Link>
      <Link to="/contact" className="mr-16">
        Contact
      </Link>
    </div>
  );
};

export default Header;
