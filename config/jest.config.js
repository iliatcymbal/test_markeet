module.exports = {
  verbose: true,
  setupFiles: ['../config/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'babel-jest',
    '^components/(.*)$': '<rootDir>/components/$1',
  },
  //roots: ['../src'],
  rootDir: '../src',

  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },

  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!/**/(index|actions|reducers|store).js',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
