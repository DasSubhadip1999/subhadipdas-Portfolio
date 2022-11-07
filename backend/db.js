require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.URL;
const db = process.env.DB;
const databaseConnection = () => {
  mongoose
    .connect(`${url}/${db}`)
    .then(() => console.log("App connected to DB"))
    .catch((err) => console.log(err));
};

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
});

const ContactModel = new mongoose.model("contact", ContactSchema);

module.exports = {
  databaseConnection,
  ContactModel,
};
