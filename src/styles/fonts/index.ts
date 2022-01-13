import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const fonts = StyleSheet.create({
  robotoTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.black,
  },
  robotoSubTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
    letterSpacing: 0.25,
  },
  robotoRegular: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
  },
  nunitoRegular: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  nunitoMedium: {
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
});
