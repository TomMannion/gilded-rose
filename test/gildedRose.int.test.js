const GildedRose = require("../src/gildedRose");
const ItemInterface = require("../src/itemInterface");

describe("Gilded Rose", () => {
  it("should update the quality of an item", () => {
    const gildedRose = new GildedRose();
    const itemInterface = new ItemInterface();
    let bread = itemInterface.createItem("bread", 3, 5);
    itemInterface.addItem(gildedRose.items, bread);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(4);
    expect(gildedRose.items[0].sellIn).toEqual(2);
  });
});
