import { ComponentStory, ComponentMeta } from '@storybook/react';

import WordSlider from './WordSlider';

export default {
  title: 'Organisms/WordSlider',
  component: WordSlider,
} as ComponentMeta<typeof WordSlider>;

const Template: ComponentStory<typeof WordSlider> = (args) => <WordSlider {...args} />;

export const Default = Template.bind({});

Default.args = {
  changeIndicator: 1,
  word: {
    spanish: 'Ejemplo',
    english: 'Example',
    score: 0
  }
};
