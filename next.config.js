module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/agenda': { page: '/agenda' },
    '/speakers': { page: '/speakers' },
    '/about': { page: '/about' },
    '/blue_chen': { page: '/s/blue_chen' },
    '/ct_wu': { page: '/s/ct_wu' },
    '/kevin_tu': { page: '/s/kevin_tu' },
    '/david_khourshid': { page: '/s/david_khourshid' },
    '/vibert_thio': { page: '/s/vibert_thio' },
    '/johny_vino': { page: '/s/johny_vino' },
    '/diane_shen': { page: '/s/diane_shen' },
    '/nelson_kuo': { page: '/s/nelson_kuo' },
    '/mengchih_chiang': { page: '/s/mengchih_chiang' },
    '/chris_chen': { page: '/s/chris_chen' },
    '/hsienhui_tang': { page: '/s/hsienhui_tang' },
  }),
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

    return config;
  },
};
