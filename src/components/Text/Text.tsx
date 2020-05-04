import * as React from 'react';
import styled from 'styled-components';
import { space, color, typography } from 'styled-system';
import { TextProps } from './types';

const Text: React.FC<TextProps> = styled.span`
  ${space}
  ${color}
  ${typography}
`;

Text.defaultProps = {
  fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
};

export { Text };
