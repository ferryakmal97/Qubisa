import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../../styles';

interface props {
  button?: boolean;
  children: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
}

const CText: React.FC<props> = ({button, children, onPress, style}) => {
  return button ? (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text style={{...fonts.robotoRegular, color: colors.primary, ...style}}>
        {children}
      </Text>
    </TouchableOpacity>
  ) : (
    <Text style={{...style}}>{children}</Text>
  );
};

export default CText;

const styles = StyleSheet.create({});
