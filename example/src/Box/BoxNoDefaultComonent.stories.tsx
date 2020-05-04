import * as React from 'react';
import { Box } from './Box';

export default {
  title: 'Box/Error/NoDefaultComonent',
  parameters: {
    matrix: {
      pattern: {
        bg: ['white', 'blue', 'red', 'yellow'],
        width: [1, '50%', 256],
        p: [1, 2, 3],
      },
    },
  },
};

export const NoDefaultComonent = () => <Box>TEXT</Box>;
