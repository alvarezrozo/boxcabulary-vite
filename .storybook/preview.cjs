import 'normalize.css';
import '../src/styles/global.css';
import '../src/styles/index.scss';
import '../src/styles/storybook-reset.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
