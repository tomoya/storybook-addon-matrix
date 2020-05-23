import * as React from 'react';
import { Box } from './Box';

export default {
  title: 'Box/withShowOriginal',
  component: Box,
  parameters: {
    matrix: {
      pattern: {
        bg: ['white', 'yellow'],
      },
      showOriginal: true,
    },
  },
};

export const Basic = () => <Box>TEXT</Box>;
