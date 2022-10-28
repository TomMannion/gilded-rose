const AgedBrie = require("./agedBrie");

describe("Aged Brie", () => {
  it("should reduce the sellIn value by 1", () => {
    const agedBrie = new AgedBrie("Aged Brie", 10, 10, 1);
    agedBrie.updateSellIn();
    expect(agedBrie.sellIn).toEqual(9);
  });
  it("should increase the quality value by 1", () => {
    const agedBrie = new AgedBrie("Aged Brie", 3, 5, 1);
    agedBrie.updateQuality();
    expect(agedBrie.quality).toEqual(6);
  });
  it("should increase the quality value by 2 when sellIn is 0 or less", () => {
    const agedBrie = new AgedBrie("Aged Brie", 0, 5, 1);
    agedBrie.updateQuality();
    expect(agedBrie.quality).toEqual(7);
  });
  it("should not increase the quality value above 50", () => {
    const agedBrie = new AgedBrie("Aged Brie", 3, 50, 1);
    agedBrie.updateQuality();
    expect(agedBrie.quality).toEqual(50);
  });
});
