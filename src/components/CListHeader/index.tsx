import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CText} from '..';
import {colors, fonts} from '../../styles';

interface props {
  title: string;
}

const CListHeader: React.FC<props> = ({title}) => {
  return (
    <View style={styles.container}>
      <CText style={fonts.robotoTitle}>{title}</CText>
      <CText button>Lihat Semua</CText>
    </View>
  );
};

export default CListHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 42,
    marginHorizontal: 20,
  },
});
