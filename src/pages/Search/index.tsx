import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CHeader} from '../../components';
import {fonts} from '../../styles';

const Search = ({route}) => {
  return (
    <View style={styles.container}>
      <CHeader title="Search" />
      <View style={styles.contentContainer}>
        <Text style={fonts.robotoTitle}>Search</Text>
        {route.params && (
          <Text style={[fonts.robotoTitle, {color: route.params.color}]}>
            {route.params.name}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Search;

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
