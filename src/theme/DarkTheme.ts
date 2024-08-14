import {DarkTheme} from '@react-navigation/native';

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'green',
    primary: 'rgba(255, 45, 85,0.8)',
  },
};

export default CustomDarkTheme;
