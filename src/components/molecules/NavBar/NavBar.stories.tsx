import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from './NavBar';

export default {
  title: 'Molecules/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  activeItemOverwrite: 'user',
};
