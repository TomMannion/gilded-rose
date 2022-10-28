const GenericItem = require("./genericItem");

describe("GenericItem", () => {
  it("should decrease the sellIn by 1", () => {
    const genericItem = new GenericItem("Generic Item", 10, 10, 1);
    genericItem.updateSellIn();
    expect(genericItem.updateQuality().sellIn).toEqual(9);
  });
  it("should decrease the quality by 1", () => {
    const genericItem = new GenericItem("Generic Item", 10, 10, 1);
    expect(genericItem.updateQuality().quality).toEqual(9);
  });
  it("should decrease the quality by 2 when sellIn is 0", () => {
    const genericItem = new GenericItem("Generic Item", 0, 10, 1);
    expect(genericItem.updateQuality().quality).toEqual(8);
  });

  it("should not decrease the quality below 0", () => {
    const genericItem = new GenericItem("Generic Item", 10, 0, 1);
    expect(genericItem.updateQuality().quality).toEqual(0);
  });
});
