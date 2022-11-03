import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProviderWrapper from '../../../state/ProviderWrapper';
import words_ from '../../../data/mock.json'
import Layout from '../../organisms/Layout/Layout';
import TranslatingTemplate from './Translating';

export default {
  title: 'Templates/Translating',
  component: TranslatingTemplate,
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
} as ComponentMeta<typeof TranslatingTemplate>;

const Template: ComponentStory<typeof TranslatingTemplate> = (args) => <TranslatingTemplate />;

export const Default = Template.bind({});

Default.args = {
  words: words_
};
