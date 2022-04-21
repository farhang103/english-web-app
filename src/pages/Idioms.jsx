import React from "react";
import { Link } from "react-router-dom";
import PageEdit from "../components/PageEdit";

const Idioms = () => {
  return (
    <div className="blankPage">
      <PageEdit />
      <div>
        <Link to="/idioms/body">Body Idioms</Link>
      </div>
      <div>
        <Link to="/idioms/fruit">Fruit Idioms</Link>
      </div>
      <div>
        <Link to="/idioms/color">Color Idioms</Link>
      </div>
      <div>
        <Link to="/idioms/weather">Weather Idioms</Link>
      </div>
    </div>
  );
};

export default Idioms;
