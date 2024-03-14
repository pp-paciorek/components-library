import { ComponentsProvider } from '@looker/components';
import type { Preview } from '@storybook/react';
import React from 'react';
import { customTheme } from '../src/components/theme/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ComponentsProvider themeCustomizations={customTheme}>
        <Story />
      </ComponentsProvider>
    ),
  ],
};

export default preview;
