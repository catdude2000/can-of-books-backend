"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL);
