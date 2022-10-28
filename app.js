const ItemInterface = require("./src/itemInterface");
const GildedRose = require("./src/gildedRose");
const Format = require("./src/format");

let gildedRose = new GildedRose();
let itemInterface = new ItemInterface();
let format = new Format();

// Create a new item
let sulfuras = itemInterface.createItem("Sulfuras", 0, 80);
let agedBrie = itemInterface.createItem("Aged Brie", 10, 20);
let backstagePass = itemInterface.createItem("Backstage Pass", 15, 2);
let genericItem = itemInterface.createItem("Bread", 20, 10);
let conjuredItem = itemInterface.createItem("Conjured Bread", 10, 15);

// Add the item to the Gilded Rose
itemInterface.addItem(gildedRose.items, sulfuras);
itemInterface.addItem(gildedRose.items, agedBrie);
itemInterface.addItem(gildedRose.items, backstagePass);
itemInterface.addItem(gildedRose.items, genericItem);
itemInterface.addItem(gildedRose.items, conjuredItem);

// Update the items

for (let i = 0; i < 10; i++) {
  console.log(`Day ${i + 1}`);
  gildedRose.updateQuality();
  //console.log(gildedRose.updateQuality());
}

// Print the items
console.log(format.inventory(gildedRose.items));
