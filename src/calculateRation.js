import getFoodData from './utilities/getFoodData.js';

// функция для рандомного выбора продукта
const getRandomFood = (type, foodList) => {
  const keys = Object.keys(foodList);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { food: randomKey, amount: foodList[randomKey][type] };
};

// функция для расчета БЖУ
const getFoodCount = (type, count, foodList) => {
  const result = {};
  const units = {};

  // получаем рандомный продукт
  const randomFood = getRandomFood(type, foodList);

  // считаем количество случайного продукта, для нужного количества БЖУ
  const requiredAmount = (count * 100) / randomFood.amount;
  result[randomFood.food] = requiredAmount;
  units[randomFood.food] = 100;

  // учитываем наличия БЖУ в других продуктах
  const keys = Object.keys(foodList);
  keys.filter((otherFood) => !otherFood.includes(randomFood.food)).forEach((otherFood) => {
    const requiredOtherAmount = (requiredAmount * foodList[otherFood][type]) / 100;
    result[randomFood.food] += requiredOtherAmount;
    units[randomFood.food] += 100;
  });

  // считаем дополнительное количество продукта, если необходимо  БЖУ из других продуктов
  keys.forEach((food) => {
    const foodUnit = units[food];
    const foodGrams = foodUnit / 100;
    keys.filter((otherFood) => !otherFood.includes(food)).forEach((otherFood) => {
      const otherFoodGrams = (foodGrams * foodList[otherFood][type]) / 100;
      if (otherFoodGrams > foodList[otherFood][type]) {
        const additionAmount = (otherFoodGrams - foodList[otherFood][type]) / foodList[food][type];
        result[food] += additionAmount * foodGrams;
      }
    });
  });

  // оставляем только необходимое количества продукта
  keys.forEach((food) => {
    result[food] = Math.floor((result[food] / units[food]) * 100);
  });

  return result;
};

// Основная функция для получения массива продуктов на 7 дней
const calculateRation = (calories, days = 7) => {
  const { protein, fat, carbs } = calories;
  const result = {};
  for (let i = 0; i < days; i += 1) {
    const proteinFood = getFoodCount('protein', protein, getFoodData().protein);
    const fatFood = getFoodCount('fat', fat, getFoodData().fat);
    const carbsFood = getFoodCount('carbs', carbs, getFoodData().carbs);
    result[i] = {
      proteinFood,
      fatFood,
      carbsFood,
    };
  }
  return result;
};

export default calculateRation;
