export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'ts'],
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/*.spec.ts'], // Ajuste para rodar os testes unitários
    coverageDirectory: 'coverage',
  };
  