import * as React from 'react';
import styled from '@emotion/styled';
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
  PositionProps & { id?: string };

export const Box: React.FC<BoxProps> = styled.div`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${shadow}
  ${position}
`;
