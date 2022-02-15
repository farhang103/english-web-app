import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-lg text-black w-full flex justify-end items-start mt-4 col-start-3">
      <div className="mr-4">
        <Link to="/" className="mr-16">
          HOME
        </Link>
        <Link to="/about" className="mr-16">
          ABOUT
        </Link>
        <Link to="/contact" className="mr-16">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
