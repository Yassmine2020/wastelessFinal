import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  try {
    const user = await prisma.users.findMany({
      where: {
        UserID: id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ code: "ERROR" });
  }
};
