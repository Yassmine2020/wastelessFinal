import { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const msg = {
    to: email, // Change to your recipient
    from: "oussama.nejjar.n5@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ status: "EMAIL SENT" });
    })
    .catch((error) => {
      res.status(400).json({ status: error });
    });
};
