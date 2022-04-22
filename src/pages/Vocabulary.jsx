import React, { useContext } from "react";
import PageEdit from "../components/PageEdit";
import { Link } from "react-router-dom";
import { VocabularyContext } from "../context/VocabularyContext";

const Vocabulary = () => {
  const { vocab, setVocab } = useContext(VocabularyContext);

  let list = [...vocab];

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
          setVocab([...vocab, text]);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link to={`/vocabulary/${spaceChecker(array.toLowerCase())}`}>
              {array}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Vocabulary;
