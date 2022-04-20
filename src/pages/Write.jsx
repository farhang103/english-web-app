import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import image from "../blog-image.jpg";
import React from "react";

const Write = () => {
  return (
    <div className="blankPage">
      <img src={image} alt="" className="rounded-lg" />
      <form className="mt-6 h-full w-full">
        <div className="flex items-center justify-center">
          <label htmlFor="fileInput">
            <FontAwesomeIcon icon={faPlusSquare} className="mr-10 h-16" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="bg-main mr-10 w-[70vw] rounded-lg border-2 border-black p-4 font-bold placeholder:italic"
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div>
          <textarea
            placeholder="Write the story..."
            type="text"
            className="bg-main my-10 w-[70vw] rounded-lg border-2 border-black p-4 placeholder:italic"
          ></textarea>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-main w-40 rounded-md border-2 border-black p-4 hover:bg-gray-700 hover:text-white">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
