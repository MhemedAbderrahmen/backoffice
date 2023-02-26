import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseLayout, { IBaseLayout } from './BaseLayout';
import { mockBaseLayoutProps } from './BaseLayout.mocks';

export default {
  title: 'templates/BaseLayout',
  component: BaseLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseLayout> = (args) => (
  <BaseLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseLayoutProps.base,
} as IBaseLayout;
