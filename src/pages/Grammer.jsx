import React, { useContext } from "react";
import PageEdit from "../components/PageEdit";
import { Link } from "react-router-dom";
import { GrammerContext } from "../context/GrammerContext";

const Grammer = () => {
  const { grammer, setGrammer } = useContext(GrammerContext);

  let list = [
    "Beginner",
    "Pre-Intermidiate",
    "Intermediate",
    "Upper-Intermediate",
    "Advanced",
    ...grammer,
  ];

  return (
    <div className="blankPage">
      <PageEdit
        onSubmit={(text) => {
          setGrammer([...grammer, text]);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link to={`/grammer/${array.toLowerCase()}`}>{array}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Grammer;
