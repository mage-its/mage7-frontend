module.exports = {
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                // eslint-disable-next-line no-param-reassign
                args[0].title = 'MAGE 7';
                return args;
            });
    },
    pwa: {
      workboxOptions: {
        exclude: [/\.eot$/, /\.ttf$/, /\.pdf$/, /\.docx?$/, /^.*pdf\/.*$/, /^.*docx\/.*$/, /^.*uploads\/.*$/],
      },
      themeColor: '#111111',
    },
};
