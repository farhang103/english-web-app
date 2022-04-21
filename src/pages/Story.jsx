import React, { useContext } from "react";
import PageEdit from "../components/PageEdit";
import { Link } from "react-router-dom";
import { StoryContext } from "../context/StoryContext";

const Story = () => {
  const { story, setStory } = useContext(StoryContext);

  let list = [...story];
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
            <Link to={`/story/${array.toLowerCase()}`}>{array}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Story;
