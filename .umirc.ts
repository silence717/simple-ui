import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'simple-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  hash: true,
  // resolve: {
  //   includes: ['docs', 'packages/Button/src'],
  // },
});
