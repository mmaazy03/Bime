import * as React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const useAppModalBottomSheet = () => {
  // hooks
  const sheetRef = React.useRef<BottomSheet>(null);

  // // callbacks
  // const handleSheetChange = React.useCallback((index: number) => {}, []);

  // const handleSnapPress = React.useCallback((index: number) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);

  // const handleClosePress = React.useCallback(() => {
  //   sheetRef.current?.close();
  // }, []);

  // const handleOpenPress = React.useCallback(() => {
  //   sheetRef.current?.expand();
  // }, []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    // bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = React.useCallback((index: number) => {}, []);

  return {
    sheetRef,
    // handleClosePress,
    // handleSheetChange,
    // handleSnapPress,
    // handleOpenPress,
  };
};

export default useAppModalBottomSheet;
