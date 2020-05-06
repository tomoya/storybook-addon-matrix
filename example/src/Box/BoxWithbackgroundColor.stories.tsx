import * as React from 'react';
import { Box } from './Box';

export default {
  title: 'Box/withBackgroundColor',
  component: Box,
  parameters: {
    matrix: {
      pattern: {
        bg: ['white', 'yellow'],
      },
      backgroundColor: 'black',
    },
  },
};

export const Basic = () => <Box>TEXT</Box>;
