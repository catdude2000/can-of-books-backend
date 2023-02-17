"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);
const Book = require("./models/books.js");

async function seed() {
    // title: {type: String, require: true},
    // description: {type: String, require: true},
    // status: {type: boolean, require: true}

await Book.create({
    title: "The Great Gatsby",
    description: "The Great Gatsby is considered F. Scott Fitzgerald\’s magnum opus, exploring themes of decadence, idealism, social stigmas, patriarchal norms, and the deleterious effects of unencumbered wealth in capitalistic society, set against the backdrop of the Jazz Age and the Roaring Twenties. At its heart, it’s a cautionary tale, a revealing look into the darker side to the American Dream.",
    status: true,
});

await Book.create({
    title: "Invisible Man",
    description: "He describes growing up in a Black community in the South, attending a Negro college from which he is expelled, moving to New York and becoming the chief spokesman of the Harlem branch of \"the Brotherhood\,\" before retreating amid violence and confusion.",
    status: true,
});

await Book.create({
    title: "Holes",
    description: "Stanley Yelnats is under a curse. A curse that began with his no-good-dirty-rotten-pig-stealing-great-great-grandfather and has since followed generations of Yelnatses. Now Stanley has been unjustly sent to a boys’ detention center, Camp Green Lake, where the boys build character by spending all day, every day digging holes exactly five feet wide and five feet deep. There is no lake at Camp Green Lake. But there are an awful lot of holes.",
    status: true,
});
mongoose.disconnect();

}

seed();