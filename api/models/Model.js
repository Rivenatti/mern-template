const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
  field: {
    type: String
  }
});

module.exports = mongoose.model("Model", newSchema);
