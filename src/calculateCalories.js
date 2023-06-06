const calculateCalories = (weight, height, age, gender) => {
  const isMale = gender.toLowerCase() === 'male';
  const bmr = isMale
    ? 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
    : 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  const calories = Math.round(bmr * 1.2);
  const protein = Math.round(weight * 2.2);
  const fat = Math.round((calories * 0.2) / 9);
  const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);
  const macroRatio = `${Math.round((protein / weight) * 100)}-${Math.round((fat / weight) * 100)}-${Math.round((carbs / weight) * 100)}`;
  return {
    calories,
    protein,
    fat,
    carbs,
    macroRatio,
  };
};
const result = calculateCalories(70, 175, 30, 'male');
console.log(result);

export default calculateCalories;
