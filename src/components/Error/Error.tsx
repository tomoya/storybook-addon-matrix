import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

export type ErrorProps = {
  messages: string[];
};

export const Error: React.FC<ErrorProps> = ({ messages }) => (
  <Box bg="red" color="white" p={2}>
    <Text fontSize={2}>Storybook Addon Matrix Error</Text>
    <ul>
      {messages.map((m) => (
        <li key={m}><Text>{m}</Text></li>
      ))}
    </ul>
  </Box>
)
