module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/agenda': { page: '/agenda' },
    '/speackers': { page: '/speackers' },
  }),
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

    return config;
  },
};
