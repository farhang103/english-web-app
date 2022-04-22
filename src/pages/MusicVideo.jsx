import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageEdit from "../components/PageEdit";
import { MusicVideoContext } from "../context/MusicVideoContext.jsx";

const MusicVideo = () => {
  const { music, setMusic } = useContext(MusicVideoContext);

  let list = [...music];

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
          setMusic([...music, text]);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link to={`/music&video/${spaceChecker(array.toLowerCase())}`}>
              {array}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MusicVideo;
