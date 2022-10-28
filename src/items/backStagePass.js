const GenericItem = require("./genericItem");

class BackStagePass extends GenericItem {
  constructor(name, sellIn, quality, times) {
    super(name, sellIn, quality);
    this.times = times;
  }

  updateQuality() {
    for (let i = 0; i < this.times; i++) {
      if (this.sellIn > 10) {
        this.quality++;
      } else if (this.sellIn > 5) {
        this.quality += 2;
      } else if (this.sellIn > 0) {
        this.quality += 3;
      } else {
        this.quality = 0;
      }
      if (this.quality > 50) {
        this.quality = 50;
      }
    }
    return this;
  }
}

module.exports = BackStagePass;
