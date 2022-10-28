const BackStagePass = require("./backStagePass");

describe("BackStagePass", () => {
  it("should reduce the sellIn by 1", () => {
    const backStagePass = new BackStagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      10,
      1
    );
    backStagePass.updateSellIn();
    expect(backStagePass.sellIn).toEqual(9);
  });
  it("should increase the quality value by 1 when sellIn is more than 10", () => {
    const backStagePass = new BackStagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      11,
      5,
      1
    );
    backStagePass.updateQuality();
    expect(backStagePass.quality).toEqual(6);
  });
  it("should increase the quality value by 2 when sellIn is 10 or less", () => {
    const backStagePass = new BackStagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      5,
      1
    );
    backStagePass.updateQuality();
    expect(backStagePass.quality).toEqual(7);
  });
  it("should increase the quality value by 3 when sellIn is 5 or less", () => {
    const backStagePass = new BackStagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      5,
      1
    );
    backStagePass.updateQuality();
    expect(backStagePass.quality).toEqual(8);
  });
  it("should set the quality value to 0 when sellIn is 0 or less", () => {
    const backStagePass = new BackStagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      5,
      1
    );
    backStagePass.updateQuality();
    expect(backStagePass.quality).toEqual(0);
  });
  it("should not increase the quality value above 50", () => {
    const backStagePass = new BackStagePass(
      "Backstage passes to a TAFKAL80ETC concert",
      3,
      50,
      1
    );
    backStagePass.updateQuality();
    expect(backStagePass.quality).toEqual(50);
  });
});
