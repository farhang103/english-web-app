import React from "react";
import PageEdit from "../components/PageEdit";
import { Link } from "react-router-dom";

const Grammer = () => {
  const list = [
    "Beginner",
    "Pre-Intermidiate",
    "Intermediate",
    "Upper-Intermediate",
    "Advanced",
  ];
  return (
    <div className="blankPage">
      <PageEdit />
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
