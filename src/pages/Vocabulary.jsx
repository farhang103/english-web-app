import React, { useContext } from "react";
import PageEdit from "../components/PageEdit";
import { Link } from "react-router-dom";
import { VocabularyContext } from "../context/VocabularyContext";

const Vocabulary = () => {
  const { vocab, setVocab } = useContext(VocabularyContext);

  let list = [...vocab];
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
            <Link to={`/vocabulary/${array.toLowerCase()}`}>{array}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Vocabulary;
