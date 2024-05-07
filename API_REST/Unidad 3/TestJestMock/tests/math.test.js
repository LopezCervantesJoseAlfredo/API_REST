// math.test.js
//npx jest --coverage
const operate = require('../src/math');

// Mock de Math.random() para devolver un valor fijo
jest.spyOn(Math, 'random').mockReturnValue(0.5);

describe('operate function', () => {
  it('should operate correctly', () => {
    const result = operate(2, 3);
    // Verificar que el resultado es correcto según el valor devuelto por el mock
    expect(result).toBe(3); // 2 * 3 * 0.5 = 3
  });

  it('should return 0 if any argument is 0', () => {
    const result = operate(0, 5);
    expect(result).toBe(0);
  });
});

// Después de las pruebas, es importante restaurar la función original de Math.random()
afterAll(() => {
  jest.restoreAllMocks();
});
