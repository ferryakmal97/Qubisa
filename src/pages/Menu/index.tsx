import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CHeader} from '../../components';
import {fonts} from '../../styles';

const Menu = () => {
  return (
    <View style={styles.container}>
      <CHeader title="Lainnya" />
      <View style={styles.contentContainer}>
        <Text style={fonts.robotoTitle}>Lainnya</Text>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
