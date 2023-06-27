import Table from 'cli-table';
import rationFormatter from '../src/formatters/rationFormatter.js';

test('renders the table correctly', () => {
  const mockRationData = [
    {
      proteinFood: { chicken: 100 },
      fatFood: { avocado: 50 },
      carbsFood: { rice: 200 },
    },
    {
      proteinFood: { beef: 150 },
      fatFood: { butter: 25 },
      carbsFood: { pasta: 300 },
    },
  ];

  const expectedOutput = new Table();
  expectedOutput.push(
    ['Day', 'Protein food', 'Fat food', 'Carbs food'],
    ['Monday', 'Chicken: 100g', 'Avocado: 50g', 'Rice: 200g'],
    ['Tuesday', 'Beef: 150g', 'Butter: 25g', 'Pasta: 300g'],
  );

  const formattedTable = rationFormatter(mockRationData);

  expect(formattedTable.toString()).toEqual(expectedOutput.toString());
});
