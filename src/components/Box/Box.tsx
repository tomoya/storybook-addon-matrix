import * as React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  border,
  shadow,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  ShadowProps,
} from 'styled-system';

export type BoxProps = LayoutProps & SpaceProps & ColorProps & BorderProps & ShadowProps;

export const Box: React.FC<BoxProps> = styled.div`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${shadow}
`;
