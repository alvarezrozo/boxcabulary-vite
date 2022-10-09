import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardWord from './CardWord';

export default {
  title: 'Atoms/CardWord',
  component: CardWord,
} as ComponentMeta<typeof CardWord>;

const Template: ComponentStory<typeof CardWord> = (args) => <CardWord {...args} />;

export const Default = Template.bind({});

Default.args = {
  title:'Carro'
};

export const LongWord = Template.bind({});

LongWord.args = {
  title:'Otorrinolaringologo'
};

export const MoreThanOneWord = Template.bind({});

MoreThanOneWord.args = {
  title:'Returned from vacation freedom'
};
