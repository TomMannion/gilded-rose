const Item = require("./item");

describe("Item", () => {
  it("should return an object with a name, sellIn and quality value", () => {
    const item = new Item("bread", 3, 5);
    expect(item).toEqual({ name: "bread", sellIn: 3, quality: 5 });
  });
});
