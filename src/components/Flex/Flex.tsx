import * as React from 'react';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { Box } from '../Box';
import { Props } from './types';

const Flex: React.FC<Props> = styled(Box)`
  ${flexbox};
`;

Flex.defaultProps = {
  display: 'flex',
};

export { Flex };
