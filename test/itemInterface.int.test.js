const ItemInterface = require("../src/itemInterface");
const GenericItem = require("../src/items/genericItem");
const AgedBrie = require("../src/items/agedBrie");
const Sulfuras = require("../src/items/sulfuras");
const BackstagePass = require("../src/items/backstagePass");

describe("ItemInterface", () => {
  it("should return an object with a name, sellIn, quality value and times", () => {
    const itemInterface = new ItemInterface();
    expect(itemInterface.createItem("bread", 3, 5)).toEqual({
      name: "bread",
      sellIn: 3,
      quality: 5,
      times: 1,
    });
  });
  it("should create a new Aged Brie item", () => {
    const itemInterface = new ItemInterface();
    expect(itemInterface.createItem("Aged Brie", 3, 5)).toEqual(
      new AgedBrie("Aged Brie", 3, 5, 1)
    );
  });
  it("should create a new Sulfuras item", () => {
    const itemInterface = new ItemInterface();
    expect(itemInterface.createItem("Sulfuras", 3, 5)).toEqual(
      new Sulfuras("Sulfuras", 3, 5)
    );
  });
  it("should create a new Backstage Pass item", () => {
    const itemInterface = new ItemInterface();
    expect(itemInterface.createItem("Backstage Pass", 3, 5)).toEqual(
      new BackstagePass("Backstage Pass", 3, 5, 1)
    );
  });
  it("should create a new Conjured item", () => {
    const itemInterface = new ItemInterface();
    expect(itemInterface.createItem("Conjured", 3, 5)).toEqual(
      new GenericItem("Conjured", 3, 5, 2)
    );
  });
  it("should create a new Conjured Aged Brie item", () => {
    const itemInterface = new ItemInterface();
    expect(itemInterface.createItem("Conjured Aged Brie", 3, 5)).toEqual(
      new AgedBrie("Conjured Aged Brie", 3, 5, 2)
    );
  });
  it("should create a new Conjured Backstage Pass item", () => {
    const itemInterface = new ItemInterface();
    expect(itemInterface.createItem("Conjured Backstage Pass", 3, 5)).toEqual(
      new BackstagePass("Conjured Backstage Pass", 3, 5, 2)
    );
  });
  it("should add an item to the items array", () => {
    const itemInterface = new ItemInterface();
    const items = [];
    itemInterface.addItem(items, "bread");
    expect(items).toEqual(["bread"]);
  });
});
