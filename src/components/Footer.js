import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="absolute bottom-0 z-20 h-40 w-40 bg-slate-600">
      <Link to="/" className="mr-16">
        farhang
      </Link>
    </div>
  );
};

export default Footer;
