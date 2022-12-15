import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { Name, Email, Password } = req.body;
  if (req.method === "POST")
    try {
      const user = await prisma.users.create({
        data: {
          Name: Name,
          Email: Email,
          Password: Password,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ code: "ERROR" });
    }
};
