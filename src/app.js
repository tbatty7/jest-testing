export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function fizzbuzz(a) {
  if (a % 15 === 0) {
    return "fizzbuzz";
  }
  if (a % 3 === 0) {
    return "fizz";
  }
  if (a % 5 === 0) {
    return "buzz";
  }
  return a;
}

export function fizzbuzzTo(lastNumber) {
  const list = [];
  for (let i = 1; i <= lastNumber; i++) {
    const result = fizzbuzz(i)
    list.push(result);
  }
  return list;
}
