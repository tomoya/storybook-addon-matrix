import * as React from 'react';
import { createPropsCombinations } from './createPropsCombinations';

type Props = {
  component: React.ElementType;
  propsPattern: any[];
  originalProps: React.Props<any>;
};

export const Matrix: React.FC<Props> = ({ component, propsPattern, originalProps }) => {
  const propsCombinations = createPropsCombinations(propsPattern);
  return propsCombinations.map((props: React.Props<any>) => (
    <div>
      <Component {...originalProps} {...props} />
    </div>
  ));
  const Component = component;
};
