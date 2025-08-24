import { division, sum } from '../mathOps';

describe('sum operates correctly', () => {
  test('0 + 5 = 5', () => {
    const result = sum({ operand1: 0, operand2: 5 });
    expect(result).toBe(5);
  });

  test('5000 + 25 = 5025', () => {
    const result = sum({ operand1: 5000, operand2: 25 });
    expect(result).toBe(5025);
  });
});

describe('division operates correctly', () => {
  test('5001 / 10 = 500.1', () => {
    const result = division({ divNumber: 5001, divisor: 10 });

    expect(result).toBeCloseTo(500.1);
  });
});
