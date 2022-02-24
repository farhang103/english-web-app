import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import image from "../blog-image.jpg";

const Post = () => {
  return (
    <div className="absolute top-24 right-20 col-start-2 row-start-2 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-slate-50 p-10 text-4xl">
      <div className="flex justify-center overflow-hidden rounded-md">
        <img className="object-fill" src={image} alt="img" />
      </div>
      <FontAwesomeIcon
        className="absolute top-64 right-20 cursor-pointer"
        icon={faEdit}
        onClick={() => console.log("Edit Clicked!")}
      />
      <FontAwesomeIcon
        className="absolute top-72 right-20 mr-1 mt-10 cursor-pointer"
        icon={faTrash}
        onClick={() => console.log("Delete Clicked!")}
      />
      <h1 className="mt-10 text-5xl font-bold">
        Lorem ipsum dolor sit amet consectetur
      </h1>
      <div className="mx-20 break-all">
        <p className="leading-relaxed tracking-wide first-letter:mr-2 first-letter:ml-6 first-letter:text-8xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          fugit sed facilis laborum sunt assumenda voluptatem mollitia! Aperiam
          tempore aliquid possimus autem beatae cupiditate, maxime, asperiores
          nulla eum fuga voluptate! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Repudiandae fugit sed facilis laborum sunt assumenda
          voluptatem mollitia! Aperiam tempore aliquid possimus autem beatae
          cupiditate, maxime, asperiores nulla eum fuga voluptate! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Repudiandae fugit sed
          facilis laborum sunt assumenda voluptatem mollitia! Aperiam tempore
          aliquid possimus autem beatae cupiditate, maxime, asperiores nulla eum
          fuga voluptate! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Repudiandae fugit sed facilis laborum sunt assumenda voluptatem
          mollitia! Aperiam tempore aliquid possimus autem beatae cupiditate,
          maxime, asperiores nulla eum fuga voluptate!
        </p>
      </div>
    </div>
  );
};

export default Post;
