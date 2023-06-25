import calculateCalories from '../src/calculators/calculateCalories.js';

test('calculate calories', () => {
  const result = calculateCalories('male', 25, 175, 75, 'no activity', 'Mifflin-St Jeor');
  const testVal = {
    calories: 2069,
    protein: 78,
    fat: 69,
    carbs: 284,
    macroRatio: '15% 30% 55%',
  };
  expect(result).toEqual(testVal);
});
