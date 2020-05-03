import * as React from 'react';
import { createPropsCombinations } from './createPropsCombinations';

type Props = {
  Component: React.ReactNode;
  propsPattern: any[];
  originalProps: React.Props<any>;
};

export const Matrix: React.FC<Props> = ({ Component, propsPattern, originalProps }) => {
  const propsCombinations = createPropsCombinations(propsPattern);
  return propsCombinations.map((props: React.Props<any>) => (
    <div>
      <Component {...originalProps} {...props} />
    </div>
  ));
};
