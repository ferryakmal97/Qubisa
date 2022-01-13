import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../styles';

interface props {
  name: string;
  type?: string;
  image: string;
}

const CProfile: React.FC<props> = ({name, type, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.title}>
        <Text style={fonts.nunitoRegular}>{name}</Text>
        {type && (
          <Text numberOfLines={1} style={fonts.nunitoRegular}>
            {type}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  imageContainer: {
    height: 40,
    width: 40,
  },
  image: {
    flex: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.borderColors,
  },
  title: {
    justifyContent: 'center',
    marginLeft: 6,
    flex: 1,
  },
});
