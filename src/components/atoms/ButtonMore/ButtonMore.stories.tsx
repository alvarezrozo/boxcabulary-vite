import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonMore from './ButtonMore';

export default {
  title: 'Atoms/ButtonMore',
  component: ButtonMore,
} as ComponentMeta<typeof ButtonMore>;

const Template: ComponentStory<typeof ButtonMore> = (args) => <ButtonMore {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
};

export const Disable = Template.bind({});

Disable.args = {
  disabled: true,
};

export const HasCloseFunc = Template.bind({});

HasCloseFunc.args = {
  onClickClose: () => {}
};
