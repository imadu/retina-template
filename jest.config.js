module.exports = {
  bail: 1,
  verbose: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/__tests__/',
    '/(__)?mock(s__)?/',
    '/__jest__/',
    '.?.min.js',
    '.?.repository.ts',
    '.?.customer.controller.ts',
    '.?.pubsub.middleware.ts',
    '.?.validation.ts',
    '.?.util.ts ',
  ],
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  modulePathIgnorePatterns: ['<rootDir>/src/config/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  testTimeout: 40000,
  moduleDirectories: ['node_modules', 'packages'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^@v1/(.*)$': '<rootDir>/src/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@utils/(.*)$': '<rootDir>/src/shared/utils/$1',
    '^@user-services/(.*)$': '<rootDir>/src/v1/modules/user/services/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@repositories/(.*)$': '<rootDir>/src/repositories/$1',
  },
  resetModules: true,
  rootDir: './',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};