import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../../styles';

interface props {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const CListPopular: React.FC<props> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}>
      <Text style={fonts.nunitoRegular}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CListPopular;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.borderColors,
    borderRadius: 2,
    marginHorizontal: 6,
    marginVertical: 20,
  },
});
