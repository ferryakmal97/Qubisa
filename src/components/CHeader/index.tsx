import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IcFeather from 'react-native-vector-icons/Feather';
import {colors, fonts} from '../../styles';

interface props {
  title: string;
  member?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const CHeader: React.FC<props> = ({title, member, onPress}) => {
  const navigation = useNavigation();
  if (member) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.notMember}
          activeOpacity={0.7}>
          <Text style={fonts.robotoSubTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonBack}
          activeOpacity={0.7}>
          <IcFeather name="arrow-left" size={24} color={colors.black} />
        </TouchableOpacity>
        <Text style={fonts.robotoSubTitle}>{title}</Text>
      </View>
    );
  }
};

export default CHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 64,
    elevation: 2,
  },
  buttonBack: {
    borderRadius: 50,
    position: 'absolute',
    left: 0,
    marginLeft: 10,
  },
  notMember: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
});
