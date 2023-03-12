const express = require("express");
const { connect } = require("mongoose");
const routes = require("./routes/ToDoRoute");
const cors = require("cors")

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json())
app.use(cors())

connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Connected To MongoDB...`);
  })
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
