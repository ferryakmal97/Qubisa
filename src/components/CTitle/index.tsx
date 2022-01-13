import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../styles';
import {width} from '../../utils';

interface props {
  title: string;
}

const CTitle: React.FC<props> = ({title}) => {
  return (
    <View>
      <Text style={[fonts.robotoTitle, styles.titleContainer]}>{title}</Text>
      <View style={styles.list} />
    </View>
  );
};

export default CTitle;

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 12,
    textAlign: 'center',
  },
  list: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: colors.primary,
    width: width / 3,
    alignSelf: 'center',
  },
});
