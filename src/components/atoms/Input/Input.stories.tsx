import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  autofocus: true
};

export const SuccessState = Template.bind({});

SuccessState.args = {
  state: 'success',
  autofocus: true
};

export const ErrorState = Template.bind({});

ErrorState.args = {
  state: 'error',
  autofocus: true,
  canWrite: true
};