import '@hrnet-aj/ui/dist/index.css';
import '@hrnet-aj/date-picker/dist/index.css';
import '@hrnet-aj/modal/style.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        [
          'date-picker',
          'icons',
          'modal',
          'ui',
        ],
      ],
    },
  },
};
