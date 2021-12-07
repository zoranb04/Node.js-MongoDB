const { model } = require("mongoose");
const Car = model("cars", {
  make: { type: , index: true },
  series: String,
  powerTrain: String,
  l/100kmh: Number,
  color: String
});

module.exports = Car;
