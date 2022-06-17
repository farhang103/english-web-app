import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { GrammerContext } from "../context/GrammerContext";
import { getContexts } from "react-dynamic-context-provider";
import PageEdit from "./PageEdit";

const BlankPage = () => {
  const [name, setName] = useState("");
  //   const { grammer, setGrammer } = useContext(GrammerContext);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let lis = getContexts().BlankContext;

  const newName = capitalize(name);
  const SetNewName = `Set${capitalize(name)}Context`;
  console.log(lis);

  const myValue = useContext(lis);
  const setMyValue = useContext(getContexts().SetBlankContext);

  let list = [...myValue];

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
    <div className="blankPage relative">
      <PageEdit
        onSubmit={(text) => {
          setMyValue([...myValue, text]);
          setName(text);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link to={`/grammer/${spaceChecker(array.toLowerCase())}`}>
              {array}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlankPage;
