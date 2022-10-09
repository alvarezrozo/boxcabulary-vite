import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from './Layout';

export default {
  title: 'Organisms/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const WithoutOnboarding = Template.bind({});

WithoutOnboarding.args = {
  hasOnboarding: false
};

export const WithoutOnboardingAndNavBar = Template.bind({});

WithoutOnboardingAndNavBar.args = {
  hasOnboarding: false,
  hasNavBar: false,
};
