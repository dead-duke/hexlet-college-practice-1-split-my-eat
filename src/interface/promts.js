import enquirer from 'enquirer';
import validator from '../utilities/validator.js';
import normaizeDelimiter from '../utilities/normaizeDelimiter.js';

export const whatUserGender = () => enquirer.prompt({
  name: 'gender',
  type: 'select',
  message: 'What is your gender?',
  choices: ['male', 'female'],
});

export const whatUserAge = () => enquirer.prompt({
  name: 'age',
  type: 'input',
  message: 'What is your age?',
  initial: 25,
  validate: (input) => validator(input, 'age', 0, 99),
});

export const whatUserHeight = (gender) => enquirer.prompt({
  name: 'height',
  type: 'input',
  message: 'What is your height?',
  initial: gender === 'male' ? 175 : 165,
  validate: (input) => validator(input, 'height', 140, 230),
});

export const whatUserWeight = (height) => enquirer.prompt({
  name: 'weight',
  type: 'input',
  message: 'What is your weight?',
  initial: normaizeDelimiter(height) - 100 > 0 ? normaizeDelimiter(height) - 100 : 50,
  validate: (input) => validator(input, 'weight', 35, 160),
});

export const whatUserPhysicalActivity = () => enquirer.prompt({
  name: 'physicalActivity',
  type: 'select',
  message: 'What is your physical activity level?',
  choices: [
    { message: 'no activity' },
    { message: '1-3 light activities per week' },
    { message: '3-5 moderate activities per week' },
    { message: '5-6 moderate activities per week' },
    { message: '7 vigorous activities per week' },
  ],
});

export const whatCaloriesFormulaUse = () => enquirer.prompt({
  name: 'formula',
  type: 'select',
  message: 'What calories formula use?',
  choices: [
    { message: 'Mifflin-St Jeor' },
    { message: 'Harris-Benedict' },
  ],
});

export const whatUserWants = () => enquirer.prompt({
  name: 'answer',
  type: 'select',
  prefix: String.fromCharCode(0x2B8A),
  message: 'What information do you want to see?',
  choices: ['calories', 'meal plan', 'calories and meal plan', 'exit'],
});
