/* eslint-disable @typescript-eslint/no-magic-numbers */
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
      {propsCombinations.map((props: React.Props<any>) => (
        <Flex
          key={encodeURIComponent(JSON.stringify(props))}
          border="1px solid #ddd"
          m="auto"
          mb={3}
          boxShadow="1px 1px 6px #eee"
          borderRadius={3}
          width={3 / 10}
        >
          <Box bg="rgb(246, 249, 252)" p={2} width={128}>
            {Object.entries(props).map(([key, value]) => (
              <Box key={key}>
                <Box mb={2}>
                  <Text fontWeight="bold" color="rgba(51, 51, 51, 0.75)">
                    {key}
                  </Text>
                  : <Text color="rgba(51, 51, 51, 0.75)">{value ?? 'undefined'}</Text>
                </Box>
              </Box>
            ))}
          </Box>
          <Box m={2} overflow="hidden">
            <Component {...originalProps} {...props} />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
