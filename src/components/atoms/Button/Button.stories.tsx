import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Button',
};

export const GreenColor = Template.bind({});

GreenColor.args = {
  title: 'Button',
  themeColor: 'green'
};

export const RedColor = Template.bind({});

RedColor.args = {
  title: 'Button',
  themeColor: 'red'
};

export const GhostState = Template.bind({});

GhostState.args = {
  title: 'Button',
  themeColor: 'green',
  state: 'ghost'
};

export const RedGhostState = Template.bind({});

RedGhostState.args = {
  title: 'Button',
  themeColor: 'red',
  state: 'ghost'
};

export const Disable = Template.bind({});

Disable.args = {
  title: 'Button',
  themeColor: 'red',
  state: 'ghost',
  isDisable: true,
};
