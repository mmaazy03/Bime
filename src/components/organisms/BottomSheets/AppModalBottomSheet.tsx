import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import {AppBottomSheetProps} from '@types';
// import {useTheme} from '@components';
import R from '@theme';
import {useReducedMotion} from 'react-native-reanimated';
import {ANIMATION_CONFIGS} from '@gorhom/bottom-sheet';
import {ReduceMotion} from 'react-native-reanimated';

const AppModalBottomSheet = React.forwardRef(
  (
    {
      children,
      onSheetClosed,
      initialIndex,
      customBottomSheetStyle,
      customBottomSheetIndicatorStyle,
      customSnapPoints,
      enableDynamicSizing = true,
      enablePanDownToClose = true,
      onChangeSheet,
      showBackDrop = false,
      index,
    }: AppBottomSheetProps,
    ref,
  ) => {
    // const {colors} = useTheme();

    const reducedMotion = useReducedMotion();

    const snapPoints = React.useMemo(() => {
      if (customSnapPoints?.length > 0) {
        return [...customSnapPoints];
      } else {
        return ['40%', '100%'];
      }
    }, [customSnapPoints]);

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          snapPoints={snapPoints}
          index={index}
          animateOnMount={!reducedMotion}
          animationConfigs={{
            ...ANIMATION_CONFIGS,
            reduceMotion: ReduceMotion.Never,
          }}
          enableDismissOnClose
          handleIndicatorStyle={[
            // styles(colors).handleBarStyle,
            customBottomSheetIndicatorStyle,
          ]}
          enableDynamicSizing={enableDynamicSizing}
          enablePanDownToClose={enablePanDownToClose}
          {...(initialIndex && {
            index: initialIndex,
          })}
          // backgroundStyle={[styles(colors).container, customBottomSheetStyle]}
          {...(onChangeSheet && {
            onChange: index
              ? value => onChangeSheet && onChangeSheet(value)
              : value => {},
          })}
          onDismiss={onSheetClosed}
          backdropComponent={
            showBackDrop
              ? props => (
                  <BottomSheetBackdrop
                    {...props}
                    opacity={0.5}
                    enableTouchThrough={false}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    style={[
                      // {backgroundColor: colors.backdropColor},
                      StyleSheet.absoluteFillObject,
                    ]}
                  />
                )
              : undefined
          }>
          {children}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

export default React.memo(AppModalBottomSheet);

const styles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.screenWrapperBackground,
    },
    handleBarStyle: {
      backgroundColor: colors.bottomSheetHandleBar,
      width: R.unit.scale(40),
      marginTop: R.unit.scale(6),
      height: R.unit.scale(2),
    },
  });
