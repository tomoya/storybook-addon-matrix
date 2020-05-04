import * as React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  border,
  shadow,
  position,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  PositionProps,
} from 'styled-system';

export type BoxProps = LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  PositionProps;

export const Box: React.FC<BoxProps> = styled.div`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${shadow}
  ${position}
`;
