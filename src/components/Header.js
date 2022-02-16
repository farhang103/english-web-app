import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 col-start-3 mt-4 flex w-full items-start justify-end text-lg text-black">
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
