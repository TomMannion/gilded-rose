const Sulfuras = require("./sulfuras");

describe("Sulfuras", () => {
  it("should not decrease the sellIn", () => {
    const sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 10, 10);
    sulfuras.updateSellIn();
    expect(sulfuras.sellIn).toEqual(10);
  });
  it("should not change the quality", () => {
    const sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80);
    expect(sulfuras.updateQuality().quality).toEqual(80);
  });
});
