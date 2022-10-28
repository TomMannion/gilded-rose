const GenericItem = require("./items/genericItem");
const AgedBrie = require("./items/agedBrie");
const Sulfuras = require("./items/sulfuras");
const BackstagePass = require("./items/backstagePass");

class ItemInterface {
  createItem(name, sellIn, quality) {
    switch (true) {
      case /^Aged Brie/.test(name):
        return new AgedBrie(name, sellIn, quality, 1);
      case /Sulfuras/.test(name):
        return new Sulfuras(name, sellIn, quality);
      case /^Backstage Pass/.test(name):
        return new BackstagePass(name, sellIn, quality, 1);
      case /^Conjured/.test(name):
        switch (true) {
          case /Aged Brie/.test(name):
            return new AgedBrie(name, sellIn, quality, 2);
          case /Backstage Pass/.test(name):
            return new BackstagePass(name, sellIn, quality, 2);
          default:
            return new GenericItem(name, sellIn, quality, 2);
        }
      default:
        return new GenericItem(name, sellIn, quality, 1);
    }
  }

  addItem(items, item) {
    items.push(item);
  }
}

module.exports = ItemInterface;
