import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageEdit from "../components/PageEdit";
import { IdiomsContext } from "../context/IdiomsContext.jsx";

const IdiomsExpressions = () => {
  const { idioms, setIdioms } = useContext(IdiomsContext);

  let list = [
    "Body Idioms",
    "Fruit Idioms",
    "Color Idioms",
    "Weather Idioms",

    ...idioms,
  ];

  function hasWhiteSpace(s) {
    return s.indexOf(" ") >= 0;
  }

  const spaceChecker = (array) => {
    const space = hasWhiteSpace(array);
    if (!space) return array;
    array = array.replace(/\s/g, "-");
    return array;
  };

  return (
    <div className="blankPage">
      <PageEdit
        onSubmit={(text) => {
          setIdioms([...idioms, text]);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link
              to={`/idioms&expressions/${spaceChecker(array.toLowerCase())}`}
            >
              {array}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IdiomsExpressions;
