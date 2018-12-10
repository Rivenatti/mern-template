if (process.env.NODE_ENV === "development") {
  module.exports = require("./config").MongoDB_URI;
} else {
  module.exports = process.env.MongoDB_URI;
}
