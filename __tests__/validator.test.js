import validator from '../src/utilities/validator.js';

  test('should return true for a valid input', () => {
    const input = '10';
    const type = 'number';
    const min = 0;
    const max = 100;
    
    const result = validator(input, type, min, max);
    
    expect(result).toBe(true);
  });

  test('should return an error message for an invalid input', () => {
    const input = 'abc';
    const type = 'number';
    const min = 0;
    const max = 100;
    
    const result = validator(input, type, min, max);
    
    expect(result).toBe(`Please enter a valid ${type}, min. ${type} ${min}, max. ${type} ${max}`);
  });
