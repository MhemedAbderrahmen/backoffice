import { ComponentMeta, ComponentStory } from '@storybook/react';
import DrawerLink, { IDrawerLink } from './DrawerLink';
import { mockDrawerLinkProps } from './DrawerLink.mocks';

export default {
  title: 'templates/DrawerLink',
  component: DrawerLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DrawerLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DrawerLink> = (args) => (
  <DrawerLink {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDrawerLinkProps.base,
} as IDrawerLink;
