import * as React from 'react';
import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
  parameters: {
    matrix: {
      pattern: {
        bg: ['white', 'blue', 'red', 'yellow'],
        bool: [true, false],
        width: [1, '50%', 256],
        p: [undefined, 2, 3],
      },
    },
  },
};

export const Basic = () => <Box>TEXT</Box>;
