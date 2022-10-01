import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from '../Icons/Home';
import HomeFull from '../Icons/HomeFull';
import User from '../Icons/User';
import UserFull from '../Icons/UserFull';

import NavItem from './NavItem';

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

export const UserIcon = Template.bind({});

UserIcon.args = {
  activeIcon: <UserFull />,
  inactiveIcon: <User />,
  callback: () => {}
};

export const HomeIcon = Template.bind({});

HomeIcon.args = {
  activeIcon: <HomeFull />,
  inactiveIcon: <Home />,
  callback: () => {}
};
