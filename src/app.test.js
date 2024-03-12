import { add, fizzbuzz, subtract } from "./app";

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts 2-1", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  it("passing 1 to fizzbuzz returns 1", () => {
    const extracted = fizzbuzz(1);
    expect(extracted).toEqual(1);
  });

});
