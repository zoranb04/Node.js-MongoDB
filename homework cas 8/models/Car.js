const { model } = require("mongoose");
const Car = model("cars", {
  make: { type: String, index: true },
  series: String,
  powerTrain: String,
  l100kmh: Number,
  color: String
});

module.exports = Car;
