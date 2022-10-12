import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopUp from './PopUp';

export default {
  title: 'Atoms/PopUp',
  component: PopUp,
} as ComponentMeta<typeof PopUp>;

const Template: ComponentStory<typeof PopUp> = (args) => <PopUp {...args} />;

export const Default = Template.bind({});

Default.args = {
  title:'La solución correcta es:',
  description: 'Miguelito Perez',
  theme: 'green'
};

export const RedColor = Template.bind({});

RedColor.args = {
  title:'La solución correcta es',
  description: 'Miguelito Perez',
  theme: 'red'
};

export const WithoutDescription = Template.bind({});

WithoutDescription.args = {
  title:'¡Muy bien!',
  theme: 'green'
};
