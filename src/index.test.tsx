import * as React from 'react';
import { mount } from 'enzyme';
import { withMatrix } from '.';

type BaseComponentProps = {
  title?: string;
  text: string;
};

const BaseComponent: React.FC<BaseComponentProps> = ({ title, text }) => (
  <div>
    {title && <h1>{title}</h1>}
    <p>{text}</p>
  </div>
);

const TestComponent: React.FC = () => <BaseComponent title="TITLE" text="TEXT" />;

describe('addon Matrix', () => {
  const createStoryFn = (Component: React.ElementType) => () => <Component />;
  const storyFn = createStoryFn(TestComponent);
  it('should render <Matrix />', () => {
    const Matrix = withMatrix()(storyFn, {
      parameters: {
        component: BaseComponent,
        matrix: {
          pattern: {
            title: [undefined, 'title pattern 1'],
            text: ['text pattern 1', 'text pattern 2'],
          },
        },
      },
    });
    expect(mount(Matrix)).toMatchSnapshot();
  });
});
