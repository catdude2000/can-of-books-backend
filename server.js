"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const Book = require("./models/books.js");

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongoose is connected");
});

const PORT = process.env.PORT || 5005;

app.get("/", (request, response) => {
  response.status(200).send("Hi from the server!");
});

app.get("/books", getBooks);
app.post('/books', postBooks);
app.delete('/books/:id', deleteBooks);

async function getBooks(request, response, next) {
  try {
    let results = await Book.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}


async function postBooks(request, response, next){
  console.log('coming in on:', request.body);
  try {
    let createBook = await Book.create(request.body);
    response.status(200).send(createBook);
  } catch (error) {
    next(error);
  }
}

async function deleteBooks(request, response, next){
  console.log('id', request.params.id);
  try {
    let id = request.params.id;
    await Book.findByIdAndDelete(id);
    response.status(200).send('Book was deleted');
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
