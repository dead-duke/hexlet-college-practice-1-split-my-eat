import fs from 'fs';
import path from 'path';
import calculateRation from '../src/calculators/calculateRation.js';

const testFoodDataPath = path.resolve('./__fixtures__/foodDataTest.json');
const testFoodData = JSON.parse(fs.readFileSync(testFoodDataPath, 'utf8'), 2);
const testResultPath = path.resolve('./__fixtures__/resultTest.json');
const testResult = JSON.parse(fs.readFileSync(testResultPath, 'utf8'), 2);
const testCaloriesPath = path.resolve('./__fixtures__/caloriesTest.json');
const testCalories = JSON.parse(fs.readFileSync(testCaloriesPath, 'utf8'), 2);

test('calculateRation returns correct values', () => {
  expect(calculateRation(testCalories, testFoodData)).toEqual(testResult);
});
