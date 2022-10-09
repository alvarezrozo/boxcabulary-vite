import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from './ProgressBar';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  totalSteps: 20,
  currentStep: 10
};

export const Full = Template.bind({});

Full.args = {
  totalSteps: 20,
  currentStep: 21
};

export const Starting = Template.bind({});

Starting.args = {
  totalSteps: 20,
  currentStep: 1
};