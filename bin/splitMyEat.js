#!/usr/bin/env node
import updateFoodData from '../src/utilities/updateFoodData.js';
import getRation from '../src/getRation.js';
import * as prompts from '../src/interface/promts.js';
import { showLogo, showOutput } from '../src/interface/output.js';

const run = async (updateData = true) => {
  if (updateData) {
    await updateFoodData();
  }

  showLogo('Split my eat');

  const { gender } = await prompts.whatUserGender();
  const { age } = await prompts.whatUserAge();
  const { height } = await prompts.whatUserHeight(gender);
  const { weight } = await prompts.whatUserWeight(height);
  const { physicalActivity } = await prompts.whatUserPhysicalActivity();
  const { formula } = await prompts.whatCaloriesFormulaUse();

  const userInfo = `Gender: ${gender}, age: ${age}, height: ${height}, weight: ${weight}\nPhysical activity: ${physicalActivity}\nCalories count formula: ${formula}`;
  const userData = getRation(gender, age, height, weight, physicalActivity, formula);
  showOutput(userInfo, userData);
};

run();
