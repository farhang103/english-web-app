import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const editorId = String(req.query.id);

  if (req.method === "DELETE") {
    const editor = await prisma.editor.delete({
      where: { id: editorId },
    });
    res.json(editor);
  }

  if (req.method === "PUT") {
    const { content } = JSON.parse(req.body);

    const editor = await prisma.editor.update({
      where: {
        id: editorId,
      },
      data: { content: content },
    });
    res.json(editor);
  }
}
