class Format {
  constructor() {
    this.string = "";
  }
  inventory(inventory) {
    inventory.forEach((item) => {
      this.string += `name: ${item.name}, sellIn: ${item.sellIn}, quality: ${item.quality}\n`;
    });
    return this.string;
  }
}

module.exports = Format;
