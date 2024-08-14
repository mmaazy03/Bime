import { CONSTANTS } from '@constants';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

const useDarkTheme = () => {
  const { currentAppearance } = useSelector((state: any) => state.Settings);
  const isDarkModeEnabled = useColorScheme() === 'dark';

  const isDarkTheme =
    currentAppearance.key == CONSTANTS.applicationThemes.dark.key
      ? true
      : currentAppearance.key == CONSTANTS.applicationThemes.light.key
      ? false
      : isDarkModeEnabled
      ? true
      : false;

  return isDarkTheme;
};

export default useDarkTheme;
