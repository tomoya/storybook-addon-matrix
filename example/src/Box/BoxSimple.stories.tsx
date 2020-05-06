import * as React from 'react';
import { Box } from './Box';

export default {
  title: 'Box/Simple',
  component: Box,
  parameters: {
    matrix: {
      pattern: {
        bg: ['red', 'yellow'],
      },
    },
  },
};

export const Basic = () => <Box>TEXT</Box>;
