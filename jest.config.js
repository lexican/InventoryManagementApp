const {defaults} = require('jest-config');

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['tsx', ...defaults.moduleFileExtensions],
};
