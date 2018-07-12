module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/agenda': { page: '/301' },
    '/speakers': { page: '/301' },
    '/about': { page: '/301' },
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
    '/heng_sung': { page: '/s/heng_sung' },
    '/daisuke_sakai': { page: '/s/daisuke_sakai' },
    '/justin_woo': { page: '/s/justin_woo' },
    '/paul_irish': { page: '/s/paul_irish' },
    '/liangbin_hsueh': { page: '/s/liangbin_hsueh' },
    '/kirby_wu': { page: '/s/kirby_wu' },
    '/chloe_jiang': { page: '/s/chloe_jiang' },
    '/jeremy_lu': { page: '/s/jeremy_lu' },
  }),
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = { fs: 'empty' };

    return config;
  },
};
