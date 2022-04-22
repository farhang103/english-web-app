import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageEdit from "../components/PageEdit";
import { GamesTestsContext } from "../context/GamesTestsContext.jsx";

const GamesTests = () => {
  const { games, setGames } = useContext(GamesTestsContext);

  let list = [...games];

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
          setGames([...games, text]);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link to={`/games&tests/${spaceChecker(array.toLowerCase())}`}>
              {array}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GamesTests;
