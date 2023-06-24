const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./routes/index');

const environment = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

if (environment !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', routes);
app.listen(port, () => console.log(`listening on port: ${port}`));