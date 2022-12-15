import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const mail = require("@sendgrid/mail");
// const prisma = new PrismaClient();
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  // const user = await prisma.users.findFirst({
  //   where: {
  //     Email: email,
  //   },
  // });
  // const pwd = user?.Password;

  const mailData = {
    to: email, // Your email where you'll receive emails
    from: "eddybyassmine@gmail.com", // your website email address here
    subject: `Mot de passe oublié`,
    text: "zahia",
    html: `<div>zahia</div>`,
  };
  mail.send(mailData);
  res.status(200).json({ status: "Ok" });
};
