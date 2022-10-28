const Item = require("./item");

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateSellIn() {
    return this;
  }

  updateQuality() {
    return this;
  }
}

module.exports = Sulfuras;
