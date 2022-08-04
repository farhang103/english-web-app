import React, { useContext } from "react";
import PageEdit from "../../../components/PageEdit";
import parse from "html-react-parser";
import { PrismaClient } from "@prisma/client";
import ShowContent from "../../../components/context/ShowContent";

const prisma = new PrismaClient();

export async function getServerSideProps({ params }: any) {
  const editor = await prisma.editor.findUnique({
    where: {
      id: String(params?.body),
    },
    select: {
      id: true,
      content: true,
    },
  });

  return {
    props: {
      editor,
    },
  };
}

const Body = ({ editor }: any) => {
  const showContent = useContext(ShowContent);

  return (
    <>
      <div className="textEditor">
        <PageEdit id={editor?.id} content={editor?.content} />
        {showContent?.isOpen ? "" : editor ? parse(editor.content) : ""}
      </div>
    </>
  );
};

export default Body;
