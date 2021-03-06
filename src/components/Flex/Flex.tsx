import * as React from 'react';
import styled from '@emotion/styled';
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
