import * as React from 'react';
import { makeDecorator } from '@storybook/addons';
import { Matrix } from './components/Matrix';
import { Box } from './components/Box';
import { Error, ErrorProps } from './components/Error';

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
    let errorMessages: ErrorProps['messages'] = [];
    if (!component) {
      errorMessages.push('Default export component must be present');
    }
    if (!pattern) {
      errorMessages.push('Parameter pattern must be present');
    }
    if (errorMessages.length !== 0) {
      return <Error messages={errorMessages} />
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
