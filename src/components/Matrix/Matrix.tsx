import * as React from 'react';
import { createPropsCombinations } from '../../createPropsCombinations';

export type MatrixProps = {
  component: React.ElementType;
  propsPattern: any[];
  originalProps: React.Props<any>;
};

export const Matrix: React.FC<MatrixProps> = ({ component, propsPattern, originalProps }) => {
  const propsCombinations = createPropsCombinations(propsPattern);
  const Component = component;
  return propsCombinations.map((props: React.Props<any>) => {
    const propsString = JSON.stringify(props);
    return (
      <div key={encodeURIComponent(propsString)}>
        <pre>{propsString}</pre>
        <Component {...originalProps} {...props} />
      </div>
    );
  });
};
