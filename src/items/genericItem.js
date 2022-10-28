const Item = require("./item");

class GenericItem extends Item {
  constructor(name, sellIn, quality, times) {
    super(name, sellIn, quality);
    this.times = times;
  }

  updateSellIn() {
    if (this.sellIn > 0) {
      this.sellIn--;
    }
    return this;
  }

  updateQuality() {
    for (let i = 0; i < this.times; i++) {
      if (this.quality > 0) {
        this.quality--;
      }
      if (this.sellIn === 0 && this.quality > 0) {
        this.quality--;
      }
    }
    return this;
  }
}

module.exports = GenericItem;
