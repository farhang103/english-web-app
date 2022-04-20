import React from "react";
import { Link } from "react-router-dom";

const Grammer = () => {
  return (
    <div className="blankPage">
      <div>
        <Link to="/grammer/beginner">Beginner</Link>
      </div>
      <div>Pre-Intermidiate</div>
      <div>Intermediate</div>
      <div>Upper-Intermediate</div>
      <div>Advanced</div>
    </div>
  );
};

export default Grammer;
