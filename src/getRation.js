import calculateCalories from './calculators/calculateCalories.js';
import calculateRation from './calculators/calculateRation.js';
import caloriesFormatter from './formatters/caloriesFormatter.js';
import rationFormatter from './formatters/rationFormatter.js';
import getFoodData from './utilities/getFoodData.js';
import normaizeDelimiter from './utilities/normaizeDelimiter.js';

const getRation = (gender, age, height, weight, physicalActivity, formula) => {
  const caloriesData = calculateCalories(
    gender,
    normaizeDelimiter(age),
    normaizeDelimiter(height),
    normaizeDelimiter(weight),
    physicalActivity,
    formula,
  );
  const rationData = calculateRation(caloriesData, getFoodData());
  const formattedCalories = caloriesFormatter(caloriesData);
  const formattedRation = rationFormatter(rationData);

  return { formattedCalories, formattedRation };
};

export default getRation;
