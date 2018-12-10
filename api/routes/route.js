// Require express router
const newRoute = require("express").Router();

// Require model schema
const Model = require("../models/Model");

// Create new route
newRoute.get("/myRoute", (req, res) => {});

module.exports = newRoute;
