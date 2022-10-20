import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProviderWrapper from '../../../state/ProviderWrapper';
import words_ from '../../../data/mock.json'
import Layout from '../../organisms/Layout/Layout';
import Translating from './Translating';

export default {
  title: 'Templates/Translating',
  component: Translating,
  decorators: [
    (Story) => (
      <ProviderWrapper>
        <MemoryRouter initialEntries={['/translating/']}>
          <Layout>
            <Story />
          </Layout>
        </MemoryRouter>
      </ProviderWrapper>
    ),
  ],
} as ComponentMeta<typeof Translating>;

const Template: ComponentStory<typeof Translating> = (args) => <Translating {...args} />;

export const Default = Template.bind({});

Default.args = {
  words: words_
};
