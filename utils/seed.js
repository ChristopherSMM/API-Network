const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");
const connection = require("../config/connection");
const users = [
    {
      username: "Christopher",
      email: "anslopez1@gmail.com",
      thought: [],
    },
  ];
  console.log(connection);