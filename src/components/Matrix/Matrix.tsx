import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
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
      <Box
        key={encodeURIComponent(propsString)}
        border="1px solid #ddd"
        m={2}
        mb={3}
        boxShadow="1px 1px 6px #eee"
        borderRadius={3}
      >
        <Box bg="#eeeeee" p={2}>
          <Text>{propsString}</Text>
        </Box>
        <Box m={2}>
          <Component {...originalProps} {...props} />
        </Box>
      </Box>
    );
  });
};
