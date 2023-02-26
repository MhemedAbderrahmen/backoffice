import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseDrawer, { IBaseDrawer } from './BaseDrawer';
import { mockBaseDrawerProps } from './BaseDrawer.mocks';

export default {
  title: 'templates/BaseDrawer',
  component: BaseDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseDrawer> = (args) => (
  <BaseDrawer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseDrawerProps.base,
} as IBaseDrawer;
