const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

require("dotenv").config();

const connection_string = process.env.MONGODB_URL;

app.listen(8800, () => {
  console.log("Server running .");
});

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull!."))
  .catch((error) => console.error(error));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
