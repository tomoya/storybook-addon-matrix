import * as React from 'react';
import styled from '@emotion/styled';
import { Text } from './Text';
import { TextProps } from './types';

export const OverflowWrapText: React.FC<TextProps> = styled(Text)`
  overflow-wrap: anywhere;
`;
