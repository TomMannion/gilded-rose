class Format {
  constructor() {
    this.string = "";
  }

  // This method is called by the GildedRose class to format the items in the inventory
  inventory(inventory) {
    inventory.forEach((item) => {
      this.string += `name: ${item.name}, sellIn: ${item.sellIn}, quality: ${item.quality}\n`;
    });
    return this.string;
  }
}

module.exports = Format;
