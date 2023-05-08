const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", (req, res) => {
    const data = req.body;
    console.log("data:", data);
    res.json({message: data.message});
})

app.listen(port, () => console.log(`listening on port: ${port}`));