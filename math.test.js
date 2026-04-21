import { multiply } from "./math";

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('multiplies 0 * 4 to equal 0', () => {
  expect(multiply(0, 4)).toBe(0);
});

test('multiplies 3 * 1.5 to equal 4.5', () => {
  expect(multiply(3, 1.5)).toBe(4.5);
});