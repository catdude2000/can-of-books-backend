"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const mongoose = require("mongoose");
const BookModel = require("./models/books");

mongoose.connect(process.env.DB_URL);

const PORT = process.env.PORT || 3002;

app.get("/", (request, response) => {
  response.status(200).send("Hi from the server!");
});

app.get("/books", getBooks);

async function getBooks(request, response, next) {
  try {
    let results = await Book.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

app.get("*", (request, response) => {
  response.statue(404).send("Not available");
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
