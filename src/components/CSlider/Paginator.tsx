import React from 'react';
import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native';
import {colors} from '../../styles';

interface props {
  scrollX: {
    interpolate: Function;
  };
  data: object[];
}

const Paginator: React.FC<props> = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -90,
    marginBottom: 72,
  },
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
  },
});
