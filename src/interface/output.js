import chalk from 'chalk';
import figlet from 'figlet';
import { whatUserWants } from './promts.js';

export const showLogo = (text) => console.log(
  chalk.green.bold(
    figlet.textSync(text, {
      font: 'Roman',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }),
  ),
);

const showMessage = (userInfo, message) => {
  console.log(`${chalk.green(userInfo)}\n`);
  console.log(chalk.white.bold(message));
};

export const showOutput = async (userInfo, userData) => {
  const { answer } = await whatUserWants();
  switch (answer) {
    case 'calories':
      showMessage(userInfo, userData.formattedCalories);
      showOutput(userInfo, userData);
      break;
    case 'meal plan':
      showMessage(userInfo, userData.formattedRation);
      showOutput(userInfo, userData);
      break;
    case 'calories and meal plan':
      showMessage(userInfo, `${userData.formattedCalories}\n\n${userData.formattedRation}`);
      showOutput(userInfo, userData);
      break;
    case 'exit':
    default:
      process.exit(0);
  }
};
