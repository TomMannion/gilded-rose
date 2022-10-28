class GildedRose {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    // loops over the items array and calls the update method on each item
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateSellIn();
      this.items[i].updateQuality();
    }
    return this.items;
  }

  printInventory(format) {
    console.log(format.inventory(this.items));
  }
}

module.exports = GildedRose;
