import * as React from 'react';
import { makeDecorator } from '@storybook/addons';
import { Matrix } from './components/Matrix';
import { Box } from './components/Box';

export const withMatrix = makeDecorator({
  name: 'withMatrix',
  parameterName: 'matrix',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { parameters }) => {
    const {
      parameters: { component },
    } = context;
    const { pattern } = parameters;
    const storyFn = getStory(context);
    const originalProps = storyFn.props;
    return (
      <>
        <Box>{storyFn}</Box>
        <Matrix component={component} propsPattern={pattern} originalProps={originalProps} />
      </>
    );
  },
});
