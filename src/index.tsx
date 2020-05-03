import * as React from 'react';
import { makeDecorator } from '@storybook/addons';
import { Matrix } from './Matrix';

export const withMatrix = makeDecorator({
  name: 'withMatrix',
  parameterName: 'matrix',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { parameters }) => {
    const { Component, pattern } = parameters;
    const storyFn = getStory(context);
    const originalProps = storyFn.props;
    return <Matrix Component={Component} propsPattern={pattern} originalProps={originalProps} />;
  },
});
