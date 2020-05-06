import * as React from 'react';
import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
  parameters: {
    matrix: {
      pattern: {
        bg: [undefined, 'red', 'yellow'],
        bool: [true, false],
        width: [undefined, '50%', 256],
        p: [undefined, 2, 3],
      },
    },
  },
};

export const Basic = () => <Box>TEXT</Box>;
