import * as React from 'react';
import styled from 'styled-components';
import { space, color, typography } from 'styled-system';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = styled.span`
  ${space}
  ${color}
  ${typography}
`;
