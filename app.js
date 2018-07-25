const express = require("express");
const logger = require("morgan");
var cors = require('cors')


const index = require("./routes/index");
const books = require("./routes/books.js");
const authors = require("./routes/authors.js");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cors())

app.use("/", index);
app.use("/books", books);
app.use("/authors", authors);

module.exports = app;
