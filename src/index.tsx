import * as React from 'react';
import { makeDecorator } from '@storybook/addons';
import { Matrix } from './components/Matrix';
import { Box } from './components/Box';
import { Error } from './components/Error';

export const withMatrix = makeDecorator({
  name: 'withMatrix',
  parameterName: 'matrix',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { parameters }) => {
    const {
      parameters: { component },
    } = context;
    if (!component) {
      return <Error messages={['Default export component must be present']} />
    }
    const { pattern } = parameters;
    if (!pattern) {
      return <Error messages={['Parameter pattern must be present']} />
    }
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
