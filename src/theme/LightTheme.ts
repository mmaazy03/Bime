import {DefaultTheme} from '@react-navigation/native';

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#b91c22',
    primary: 'rgba(255, 45, 85,0.3)',
  },
};

export default CustomLightTheme;
