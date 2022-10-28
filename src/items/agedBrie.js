const GenericItem = require("./genericItem");

class AgedBrie extends GenericItem {
  constructor(name, sellIn, quality, times) {
    super(name, sellIn, quality);
    this.times = times;
  }

  updateQuality() {
    for (let i = 0; i < this.times; i++) {
      if (this.sellIn > 0) {
        this.quality++;
      } else {
        this.quality += 2;
      }
      if (this.quality > 50) {
        this.quality = 50;
      }
    }
    return this;
  }
}

module.exports = AgedBrie;
