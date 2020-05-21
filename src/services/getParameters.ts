import { StoryContext } from '@storybook/addons';
import { MatrixProps } from '../components/Matrix';

type Parameters = {
  component?: MatrixProps['component'];
  pattern?: MatrixProps['propsPattern'];
  backgroundColor: MatrixProps['backgroundColor'];
};

export function getParameters({ parameters }: StoryContext): Parameters {
  const {
    component,
    matrix,
  } = parameters;
  if (!matrix) {
    return {
      component,
      pattern: undefined,
      backgroundColor: undefined,
    }
  }
  const { pattern, backgroundColor } = matrix;
  return {
    component,
    pattern,
    backgroundColor,
  };
}
