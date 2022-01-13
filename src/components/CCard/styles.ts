import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const articlesStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: colors.borderColors,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 6,
  },
});
