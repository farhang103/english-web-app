import React, { useState } from "react";
import PageEdit from "../../../components/PageEdit";
import parse from "html-react-parser";
import { PrismaClient } from "@prisma/client";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="textEditor">
        <div onClick={() => setIsOpen(!isOpen)}>
          <PageEdit id={editor?.id} content={editor?.content} />
        </div>
        {isOpen ? "" : editor ? parse(editor.content) : ""}
      </div>
    </>
  );
};

export default Body;
