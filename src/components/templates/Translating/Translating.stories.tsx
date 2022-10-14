import { ComponentStory, ComponentMeta } from '@storybook/react';
import words_ from '../../../data/mock.json'
import Translating from './Translating';

export default {
  title: 'Templates/Translating',
  component: Translating,
} as ComponentMeta<typeof Translating>;

const Template: ComponentStory<typeof Translating> = (args) => <Translating {...args}/>;

export const Default = Template.bind({});

Default.args = {
  words: words_
};
