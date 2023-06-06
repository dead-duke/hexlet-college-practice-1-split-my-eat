// @ts-check
import calculateCalories from '../src/calculateCalories.js';

test('calculateCalories calculates correct calories for male', () => {
  const result = calculateCalories(80, 180, 35, 'male');
  expect(result.calories).toEqual(3269);
});

test('calculateCalories calculates correct calories for female', () => {
  const result = calculateCalories(65, 165, 28, 'female');
  expect(result.calories).toEqual(2005);
});

test('calculateCalories calculates correct protein in grams', () => {
  const result = calculateCalories(75, 170, 32, 'male');
  expect(result.protein).toEqual(165);
});

test('calculateCalories calculates correct macro ratio', () => {
  const result = calculateCalories(70, 175, 30, 'male');
  expect(result.macroRatio).toEqual('22-28-50');
});
