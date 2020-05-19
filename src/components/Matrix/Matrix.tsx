/* eslint-disable @typescript-eslint/no-magic-numbers */
import * as React from 'react';
import { BackgroundColorProps } from 'styled-system';
import { Box } from '../Box';
import { Text, OverflowWrapText } from '../Text';
import { Flex } from '../Flex';
import { createPropsCombinations } from '../../services/createPropsCombinations';

export type MatrixProps = {
  component: React.ElementType;
  propsPattern: any[];
  originalProps: React.Props<any>;
  backgroundColor: BackgroundColorProps['backgroundColor'];
};

export const Matrix: React.FC<MatrixProps> = ({
  component,
  propsPattern,
  backgroundColor,
  originalProps,
}) => {
  const propsCombinations = createPropsCombinations(propsPattern);
  const totalCombinations = propsCombinations.length;
  const Component = component;
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {propsCombinations.map((props: React.Props<any>, i: number) => {
        const no = i + 1;
        const uniqueId = encodeURIComponent(JSON.stringify(props));
        return (
          <Flex
            id={`${uniqueId}--${no}`}
            key={uniqueId}
            mb={3}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.067) 0px 0px 0px 1px"
            borderRadius={4}
            width={3 / 10}
            position="relative"
            backgroundColor={backgroundColor}
          >
            <Box bg="rgb(246, 249, 252)" p={2} width={1 / 3}>
              {Object.entries(props).map(([key, value]) => (
                <Box key={key}>
                  <Box mb={2}>
                    <Text fontWeight="bold" color="rgba(51, 51, 51, 0.75)">
                      {key}
                    </Text>
                    :{' '}
                    <OverflowWrapText
                      color={
                        value === undefined ? 'rgba(51, 51, 51, 0.25)' : 'rgba(51, 51, 51, 0.75)'
                      }
                    >{`${value}`}</OverflowWrapText>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box p={2} pb={4} overflowX="scroll" width={2 / 3}>
              <Component {...originalProps} {...props} />
            </Box>
            <a href={`#${uniqueId}--${no}`}>
              <Box
                position="absolute"
                bottom="0"
                right="0"
                pt={1}
                pl={2}
                pb={1}
                pr={2}
                borderTopLeftRadius={2}
                borderBottomRightRadius={4}
                bg="rgba(255,255,255,0.6)"
              >
                <Text fontSize={1} color="rgba(51, 51, 51, 0.6)">
                  {i + 1} / {totalCombinations}
                </Text>
              </Box>
            </a>
          </Flex>
        );
      })}
    </Flex>
  );
};
