import { add, subtract, multiply, divide, fizzbuzz, fizzbuzzTo } from "./app";

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual(2);
  });

  it("subtracts 2-1", () => {
    expect(subtract(2, 1)).toEqual(1);
  });

  it("multiplies 2 and 2", () => {
    expect(multiply(2, 2)).toEqual(4);
  });

  it("divides 10 by 2", () => {
    expect(divide(10, 2)).toEqual(5);
  });

  it("fizzbuzz 1 returns 1", () => {
    const result = fizzbuzz(1);
    expect(result).toEqual(1);
  });

  it("fizzbuzz 2 returns 2", () => {
    const result = fizzbuzz(2);
    expect(result).toEqual(2);
  });

  it("fizzbuzz 3 returns fizz", () => {
    const result = fizzbuzz(3);
    expect(result).toEqual("fizz");
  });

  it("fizzbuzz 6 returns fizz", () => {
    const result = fizzbuzz(6);
    expect(result).toEqual("fizz");
  });

  it("fizzbuzz 5 returns buzz", () => {
    const result = fizzbuzz(5);
    expect(result).toEqual("buzz");
  });

  it("fizzbuzz 15 returns fizzbuzz", () => {
    const result = fizzbuzz(15);
    expect(result).toEqual("fizzbuzz");
  });

  xit("for loop that counts up", () => {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  });

  it("fizzbuzzTo returns list of 1", () => {
    const result = fizzbuzzTo(1);
    expect(result).toEqual([1]);
  });

  it("fizzbuzzTo returns list of 2", () => {
    const result = fizzbuzzTo(2);
    expect(result).toEqual([1, 2]);
  });

  it("fizzbuzzTo returns list of 3", () => {
    const result = fizzbuzzTo(3);
    expect(result).toEqual([1,2,"fizz"])
  })

  it("fizzbuzzTo returns list of 5", () => {
    const result = fizzbuzzTo(5);
    expect(result).toEqual([1,2,"fizz",4,"buzz"])
  })

  it("fizzbuzzTo returns list of 15", () => {
    const result = fizzbuzzTo(15);
    expect(result).toEqual([1,2,"fizz",4,"buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"])
  })
});
