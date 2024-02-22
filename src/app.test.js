import { add } from "./app";

describe("my test suite", () => {
  it("first test", () => {
    expect(add(1, 1)).toEqual(2);
  });
});
