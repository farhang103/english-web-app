import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageEdit from "../components/PageEdit";
import { GeneralKnowContext } from "../context/GeneralKnowContext.jsx";

const GeneralKnowledge = () => {
  const { general, setGeneral } = useContext(GeneralKnowContext);

  let list = [...general];

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
          setGeneral([...general, text]);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link to={`/generalknowledge/${spaceChecker(array.toLowerCase())}`}>
              {array}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GeneralKnowledge;
