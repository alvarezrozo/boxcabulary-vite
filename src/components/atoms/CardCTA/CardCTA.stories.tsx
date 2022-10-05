import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardCTA from './CardCTA';

export default {
  title: 'Atoms/CardCTA',
  component: CardCTA,
} as ComponentMeta<typeof CardCTA>;

const Template: ComponentStory<typeof CardCTA> = (args) => <CardCTA {...args} />;

export const Default = Template.bind({});

Default.args = {
  imgName: 'astronaut-read.png',
  label: 'Lectura'
};

export const StarColor = Template.bind({});

StarColor.args = {
  imgName: 'astronaut-write.png',
  label: 'Learn',
  backgroundColor: 'star'
};

export const RightAlign = Template.bind({});

RightAlign.args = {
  imgName: 'astronaut-write.png',
  label: 'Escritura',
  alignment: 'right'
};
