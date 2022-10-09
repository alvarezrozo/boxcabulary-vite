import { ComponentStory, ComponentMeta } from '@storybook/react';

import Onboarding from './Onboarding';

export default {
  title: 'Molecules/Onboarding',
  component: Onboarding,
} as ComponentMeta<typeof Onboarding>;

const Template: ComponentStory<typeof Onboarding> = (args) => <Onboarding {...args} />;

export const Default = Template.bind({});

Default.args = {};
