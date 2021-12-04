const { model } = require("mongoose");
const Car = model("cars", {
  godNaProizvodstvo: Number,
  marka: { type: String, index: true },
  model: String,
});

module.exports = Car;
