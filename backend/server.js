const express = require("express");
const bodyParser = require("body-parser");
const { databaseConnection, ContactModel } = require("./db");

const app = express();
databaseConnection();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  let contact = new ContactModel({ name, email, message });
  contact
    .save()
    .then(() => {
      console.log("contact saved to db");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send({ message: "Message send successfully" });
});

app.listen(5000, () => {
  console.log("server started on 5000");
});
