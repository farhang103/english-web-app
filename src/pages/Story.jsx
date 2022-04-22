import React, { useContext } from "react";
import PageEdit from "../components/PageEdit";
import { Link } from "react-router-dom";
import { StoryContext } from "../context/StoryContext";

const Story = () => {
  const { story, setStory } = useContext(StoryContext);

  let list = [...story];

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
          setStory([...story, text]);
        }}
      />
      {list.map((array) => {
        return (
          <div key={array}>
            <Link to={`/story/${spaceChecker(array.toLowerCase())}`}>
              {array}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Story;
