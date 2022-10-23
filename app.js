const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const publicDirectoryPath = path.join(__dirname, "/public");

app.use(express.static(publicDirectoryPath));

require("dotenv").config();
require("./startup/routes")(app);

mongoose
    .connect(`${process.env.MONGO_URL}`, {
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to mongDb...`);
    });

module.exports = app;
