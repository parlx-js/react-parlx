import { addDecorator } from '@storybook/react';

import './global.css';

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  docs: { page: null },
  layout: 'fullscreen',
  // parameters: {
  //   actions: {
  //     disabled: true,
  //   },
  // },
};
