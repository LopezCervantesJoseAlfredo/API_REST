// jest.config.js

module.exports = {
    // Directorios donde buscar pruebas
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    // Directorios donde buscar código fuente
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    // Informar la cobertura de código
    collectCoverage: true,
    // Directorios a excluir de la cobertura de código
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/'],
  };
  