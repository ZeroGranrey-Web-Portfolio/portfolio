const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const port = process.env.port || 3000;
// server used to send send emails
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GPASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.get("/contact", (req, res) => {
  res.send("H");
});

app.post("/contact", (req, res) => {
  console.log("POST REQUEST");
  try {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: email,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           `,
      text: message,
    };
    contactEmail.sendMail(mail, (error, info) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message Sent" });
      }
    });
  } catch (errr) {
    console.log(errr);
  }
});
