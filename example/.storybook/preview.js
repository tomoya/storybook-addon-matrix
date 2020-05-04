import { addDecorator } from '@storybook/react';

if (process.env.NODE_ENV === 'production') {
  const { withMatrix } = require('storybook-addon-matrix');
  addDecorator(withMatrix);
} else {
  const { withMatrix } = require('./storybook-addon-matrix');
  addDecorator(withMatrix);
}
