const getFoodAmount = (macrosRemaind, foodData, foodIndex) => {
  const coefficient = {
    protein: 1.7,
    fat: 1.8,
    carbs: 1,
  };

  const macros = ['protein', 'fat', 'carbs'];
  const gramsPerFood = 100;

  const food = Object.keys(foodData)[foodIndex];
  const foodName = foodData[food].name;
  const foodWeight = Math.abs(macrosRemaind[foodIndex]
    / coefficient[macros[foodIndex]]
    / foodData[food][macros[foodIndex]]);

  const newMacrosRemaind = macrosRemaind.map((macro, index) => {
    const foodMacro = foodData[food][macros[index]] * foodWeight;
    return macro - foodMacro;
  });

  const foodAmount = foodWeight * gramsPerFood;

  return [newMacrosRemaind, { [`${macros[foodIndex]}Food`]: { [foodName]: foodAmount } }];
};

const getRandomKey = (length) => Math.floor(Math.random() * length);

const getFoodForDay = (calories, foodData) => {
  const macros = ['protein', 'fat', 'carbs'];
  const randomFood = macros.reduce((acc, macro) => {
    const foodList = Object.keys(foodData[macro]);
    const food = foodList[getRandomKey(foodList.length)];
    return { ...acc, [food]: foodData[macro][food] };
  }, {});

  const iter = (protein, fat, carbs, foodAmount, count) => {
    if (count >= macros.length) {
      return foodAmount;
    }
    const [macrosRemaind, data] = getFoodAmount([protein, fat, carbs], randomFood, count);
    return iter(...macrosRemaind, { ...foodAmount, ...data }, count + 1);
  };

  const { protein, fat, carbs } = calories;
  return iter(protein, fat, carbs, {}, 0);
};

const roundFoodAmount = (food) => ({ [Object.keys(food)]: Math.round(Object.values(food)) });

const calculateRation = (calories, foodData) => {
  const iter = (days, day, acc = {}) => {
    if (day > days) {
      return acc;
    }

    const { proteinFood, fatFood, carbsFood } = getFoodForDay(calories, foodData);
    const dayData = {
      [day]: {
        proteinFood: roundFoodAmount(proteinFood),
        fatFood: roundFoodAmount(fatFood),
        carbsFood: roundFoodAmount(carbsFood),
      },
    };

    return iter(days, day + 1, { ...acc, ...dayData });
  };

  return iter(6, 0);
};

export default calculateRation;
