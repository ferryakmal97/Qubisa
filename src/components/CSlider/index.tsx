import React, {useRef} from 'react';
import {Animated, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {CGap, CTitle} from '..';
import {width} from '../../utils';
import Paginator from './Paginator';

interface props {
  slider: {
    title: string;
    imageURL: {
      mobile: string;
    };
    sort: string;
  }[];
}

const CARD_HEIGHT = 250;
const CARD_WIDTH = width - width / 12;
const SPACING_FOR_CARD_INSET = width * 0.04;

const CSlider: React.FC<props> = ({slider}) => {
  const slidesRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <>
      <FlatList
        data={slider}
        keyExtractor={item => item.sort}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: item.imageURL.mobile}}
                style={styles.image}
              />
            </View>
            <CGap height={24} />
            <CTitle title={item.title} />
          </View>
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={1}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        contentContainerStyle={{
          paddingHorizontal: SPACING_FOR_CARD_INSET,
        }}
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
      />
      <Paginator data={slider} scrollX={scrollX} />
    </>
  );
};

export default CSlider;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
});
