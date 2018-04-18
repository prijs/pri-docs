import { ProjectConfig } from 'pri/client';

export default {
  title: 'Pri',
  publicPath: '/pri-docs',
  baseHref: '/pri-docs',
  useServiceWorker: true,
  prefetchChunks: true,
  clientServerRender: true
} as ProjectConfig;
