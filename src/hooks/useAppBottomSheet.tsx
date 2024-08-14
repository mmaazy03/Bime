import BottomSheet from '@gorhom/bottom-sheet';
import * as React from 'react';

const useAppBottomSheet = () => {
  // hooks
  const sheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChange = React.useCallback((index: number) => {}, []);

  const handleSnapPress = React.useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = React.useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleOpenPress = React.useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  return {
    sheetRef,
    handleClosePress,
    handleSheetChange,
    handleSnapPress,
    handleOpenPress,
  };
};

export default useAppBottomSheet;
