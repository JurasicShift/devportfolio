const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
app.get("/", (req, res) => {
   res.send("hello world");
})
app.get("/portfolio", (req, res) => {
    res.json({message: "returned get route test 222"});
})

app.listen(port, () => console.log(`listening on port: ${port}`));