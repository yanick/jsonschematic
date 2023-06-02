module.exports = {
  stories: ['../src/**/*.stories.svelte'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-svelte-csf'],
  // "features": { "storyStoreV7": true },
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: 'window'
      }
    };
  },
  docs: {
    autodocs: true
  }
};