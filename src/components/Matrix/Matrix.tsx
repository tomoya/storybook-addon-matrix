import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Flex } from '../Flex';
import { createPropsCombinations } from '../../createPropsCombinations';

export type MatrixProps = {
  component: React.ElementType;
  propsPattern: any[];
  originalProps: React.Props<any>;
};

export const Matrix: React.FC<MatrixProps> = ({ component, propsPattern, originalProps }) => {
  const propsCombinations = createPropsCombinations(propsPattern);
  const Component = component;
  return (
    <Flex flexWrap="wrap">
      {propsCombinations.map((props: React.Props<any>) => {
        const propsString = JSON.stringify(props);
        return (
          <Flex
            key={encodeURIComponent(propsString)}
            border="1px solid #ddd"
            m="auto"
            mb={3}
            boxShadow="1px 1px 6px #eee"
            borderRadius={3}
            width={3/10}
          >
            <Box bg="#eeeeee" p={2} width={1/5}>
              <Text><span style={{ overflowWrap: 'break-word' }}>{propsString}</span></Text>
            </Box>
            <Box m={2} overflow="hidden">
              <Component {...originalProps} {...props} />
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
