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
  const totalCombinations = propsCombinations.length;
  const Component = component;
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {propsCombinations.map((props: React.Props<any>, i: number) => (
        <Flex
          key={encodeURIComponent(JSON.stringify(props))}
          mb={3}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.067) 0px 0px 0px 1px"
          borderRadius={4}
          width={3 / 10}
          position="relative"
        >
          <Box bg="rgb(246, 249, 252)" p={2} width={1 / 3}>
            {Object.entries(props).map(([key, value]) => (
              <Box key={key}>
                <Box mb={2}>
                  <Text fontWeight="bold" color="rgba(51, 51, 51, 0.75)">
                    {key}
                  </Text>
                  : <Text color="rgba(51, 51, 51, 0.75)">{`${value}`}</Text>
                </Box>
              </Box>
            ))}
          </Box>
          <Box m={2} overflow="hidden" width={2 / 3}>
            <Component {...originalProps} {...props} />
          </Box>
          <Box position="absolute" bottom="0" right="0" p={2}>
            <Text fontSize={1} color="rgba(51, 51, 51, 0.6)">
              {i + 1} / {totalCombinations}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
