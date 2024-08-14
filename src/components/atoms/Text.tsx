import React from 'react';
import R from '@theme';
import {Text as Textc} from 'react-native';

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  extraLargeTitle: R.unit.fontSize(60),
  largeTitle: R.unit.fontSize(45),
  h0: R.unit.fontSize(36),
  h1: R.unit.fontSize(32),
  h2: R.unit.fontSize(28),
  h3: R.unit.fontSize(26),
  h4: R.unit.fontSize(24),
  h5: R.unit.fontSize(22),
  h6: R.unit.fontSize(20),
  body1: R.unit.fontSize(18),
  body2: R.unit.fontSize(16),
  body3: R.unit.fontSize(14),
  body4: R.unit.fontSize(12),
  body5: R.unit.fontSize(10),
  body6: R.unit.fontSize(9),
  small: R.unit.fontSize(8),
};
export const FONTVARIANTS = {
  extraLargeTitle: {
    fontSize: SIZES.extraLargeTitle,
    lineHeight: R.unit.fontSize(65),
  },
  largeTitle: {
    fontSize: SIZES.largeTitle,
    lineHeight: R.unit.fontSize(60),
  },
  h0: {fontSize: SIZES.h0, lineHeight: R.unit.fontSize(40)},
  h1: {fontSize: SIZES.h1, lineHeight: R.unit.fontSize(38)},
  h2: {fontSize: SIZES.h2, lineHeight: R.unit.fontSize(36)},
  h3: {fontSize: SIZES.h3, lineHeight: R.unit.fontSize(32)},
  h4: {fontSize: SIZES.h4, lineHeight: R.unit.fontSize(32)},
  h5: {fontSize: SIZES.h5, lineHeight: R.unit.fontSize(24)},
  h6: {fontSize: SIZES.h6, lineHeight: R.unit.fontSize(28)},
  body1: {fontSize: SIZES.body1, lineHeight: R.unit.fontSize(22)},
  body2: {fontSize: SIZES.body2, lineHeight: R.unit.fontSize(19)},
  body3: {fontSize: SIZES.body3, lineHeight: R.unit.fontSize(24)},
  body4: {fontSize: SIZES.body4, lineHeight: R.unit.fontSize(16)},
  body5: {fontSize: SIZES.body5, lineHeight: R.unit.fontSize(14)},
  body6: {fontSize: SIZES.body5, lineHeight: R.unit.fontSize(13)},
  small: {fontSize: SIZES.small, lineHeight: R.unit.fontSize(12)},
};

export const FONTSSTYLE = {
  //UBUNTU FAMILY
  UbuntuBold: {
    fontFamily: 'Ubuntu-Bold',
  },
  UbuntuBoldItalic: {
    fontFamily: 'Ubuntu-BoldItalic',
  },
  UbuntuItalic: {
    fontFamily: 'Ubuntu-Italic',
  },
  UbuntuLight: {
    fontFamily: 'Ubuntu-Light',
  },
  UbuntuLightItalic: {
    fontFamily: 'Ubuntu-LightItalic',
  },
  UbuntuMedium: {
    fontFamily: 'Ubuntu-Medium',
  },
  UbuntuMediumItalic: {
    fontFamily: 'Ubuntu-MediumItalic',
  },
  UbuntuRegular: {
    fontFamily: 'Ubuntu-Regular',
  },

  //POPPINSS FAMILY
  PoppinsBlack: {
    fontFamily: 'Poppins-Black',
  },
  PoppinsBlackItalic: {
    fontFamily: 'Poppins-BlackItalic',
  },
  PoppinsThin: {
    fontFamily: 'Poppins-Thin',
  },
  PoppinsThinItalic: {
    fontFamily: 'Poppins-ThinItalic',
  },
  PoppinsLight: {
    fontFamily: 'Poppins-Light',
  },
  PoppinsLightItalic: {
    fontFamily: 'Poppins-LightItalic',
  },
  PoppinsExtraLight: {
    fontFamily: 'Poppins-ExtraLight',
  },
  PoppinsExtraLightItalic: {
    fontFamily: 'Poppins-ExtraLightItalic',
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Bold',
  },
  PoppinsBoldItalic: {
    fontFamily: 'Poppins-BoldItalic',
  },
  PoppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  PoppinsSemiBoldItalic: {
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  PoppinsExtraBold: {
    fontFamily: 'Poppins-ExtraBold',
  },
  PoppinsExtraBoldItalic: {
    fontFamily: 'Poppins-ExtraBoldItalic',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
  PoppinsMediumItalic: {
    fontFamily: 'Poppins-MediumItalic',
  },
  PoppinsRegular: {
    fontFamily: 'Poppins-Regular',
  },
  PoppinsItalic: {
    fontFamily: 'Poppins-Italic',
  },
};

const Text = props => {
  const {
    children,
    numberOfLines,
    style,
    variant,
    color = 'white',
    gutterTop = 0,
    gutterBottom = 0,
    align = 'auto',
    transform = 'none',
    font = '',
    letterSpacing = 0,
    top = 0,
    onPress,
    fontSize,
    lineHeight,
  } = props;
  return (
    <Textc
      style={[
        {
          marginTop: R.unit.scale(gutterTop),
          marginBottom: R.unit.scale(gutterBottom),
          color: color,
          textAlign: align,
          textTransform: transform,
          letterSpacing: letterSpacing,
          top: top,
          lineHeight: lineHeight,
          includeFontPadding: false,
        },
        fontSize && {
          fontSize: fontSize,
        },
        style,
        variant && FONTVARIANTS[variant],
        font && FONTSSTYLE[font],
        lineHeight && {
          lineHeight: R.unit.scale(lineHeight),
        },
      ]}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {children}
    </Textc>
  );
};

export default Text;
