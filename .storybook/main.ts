import type { StorybookConfig } from '@storybook/react-webpack5';

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test('.svg');
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    // config.module?.rules?.push({
    //   test: /\.svg$/i,
    //   type: 'asset',
    //   resourceQuery: /url/, // *.svg?url
    // });
    config.module?.rules?.push({
      test: /\.svg$/,
      use: 'file-loader',
    });

    // config.module?.rules?.push({
    //   test: /\.svg$/i,
    //   issuer: /\.[jt]sx?$/,

    //   resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    //   use: [{ loader: '@svgr/webpack', options: { babel: false } }],
    // });
    return config;
  },
};
export default config;
