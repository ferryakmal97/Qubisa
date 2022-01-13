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
  onPress: (event: GestureResponderEvent) => void;
}

const CButton: React.FC<props> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={{...fonts.robotoSubTitle, color: colors.white}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
});
