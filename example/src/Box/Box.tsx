import * as React from 'react';
import styled from '@emotion/styled';
import { space, color, layout, LayoutProps, SpaceProps, ColorProps } from 'styled-system';

export type BoxProps = LayoutProps & SpaceProps & ColorProps;

export const Box: React.FC<BoxProps> = styled.div`
  ${color}
  ${space}
  ${layout}
`;
