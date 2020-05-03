import * as React from 'react';
import { createPropsCombinations } from './createPropsCombinations';

type Props = {
  component: React.ElementType;
  propsPattern: any[];
  originalProps: React.Props<any>;
};

export const Matrix: React.FC<Props> = ({ component, propsPattern, originalProps }) => {
  const propsCombinations = createPropsCombinations(propsPattern);
  const Component = component;
  return propsCombinations.map((props: React.Props<any>) => {
    const propsString = JSON.stringify(props);
    return (
      <div key={encodeURIComponent(propsString)}>
        <Component {...originalProps} {...props} />
      </div>
    );
  });
};
