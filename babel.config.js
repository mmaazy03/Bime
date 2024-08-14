module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins: ['react-native-reanimated/plugin'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@constants': './src/constants/index',
          '@pages': './src/pages/index',
          '@theme': './src/theme/R',
          '@assets': './src/assets/index',
          '@pages': './src/pages',
          '@types': './src/types',
          '@config': './src/config',
          '@store': './src/store',
          '@axios': './src/axios',
          '@translations': './src/translations',
          '@services': './src/services/index',
          '@i18n': './src/i18n/*',
          '@utils': './src/utils/index',
          '@hooks': './src/hooks/index',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
