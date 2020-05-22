import { addDecorator, addParameters } from '@storybook/react';

if (process.env.NODE_ENV === 'production') {
  const { withMatrix } = require('storybook-addon-matrix');
  addParameters({
    matrix: {
      backgroundColor: 'transparent',
    },
  });
  addDecorator(withMatrix);
} else {
  const { withMatrix } = require('./storybook-addon-matrix');
  addParameters({
    matrix: {
      backgroundColor: 'transparent',
    },
  });
  addDecorator(withMatrix);
}
