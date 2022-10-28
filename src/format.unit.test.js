const Format = require("./format");

describe("Print", () => {
  it("should format the items in the correctly", () => {
    const format = new Format();
    const items = [{ name: "foo", sellIn: 0, quality: 0 }];
    expect(format.inventory(items)).toEqual(
      `name: foo, sellIn: 0, quality: 0\n`
    );
  });
});
