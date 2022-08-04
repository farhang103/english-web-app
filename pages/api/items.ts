import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { id, content } = JSON.parse(req.body);

  const savedData = await prisma.editor.create({
    data: {
      id: id,
      content: content,
    },
  });

  res.json(savedData);
}
