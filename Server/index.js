const express = require("express");
const { connect } = require("mongoose");
const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Connected To MongoDB...`);
  })
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
