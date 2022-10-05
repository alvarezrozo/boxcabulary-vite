import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardCTA from '../../atoms/CardCTA/CardCTA';

import Bouncer from './Bouncer';

export default {
  title: 'Organisms/Bouncer',
  component: Bouncer,
} as ComponentMeta<typeof Bouncer>;

const Template: ComponentStory<typeof Bouncer> = (args) => <Bouncer {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <CardCTA imgName={'astronaut-read.png'} label={'Lectura'} />,
  pixels: 140,
  from: 'right'
};

export const WithOtherCard = Template.bind({});

WithOtherCard.args = {
  children: <CardCTA imgName={'astronaut-read.png'} label={'Lectura'} alignment='right' backgroundColor='star' />,
  pixels: 140,
  from: 'left'
};