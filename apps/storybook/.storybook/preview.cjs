import '@hrnet-aj/data-table/style.css';
import '@hrnet-aj/date-picker/style.css';
import '@hrnet-aj/modal/style.css';
import '@hrnet-aj/select/style.css';
import '@hrnet-aj/ui/style.css';

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
