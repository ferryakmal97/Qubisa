import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CProfile, CRating} from '..';
import {colors, fonts} from '../../styles';
import {height, width} from '../../utils';
import {articlesStyles} from './styles';

interface props {
  data: {
    imageUrlPreview?: string;
    title: string;
    category: {
      name: string;
      color: string;
    };
    created_date: string;
    timeOfRead: number;
    instructor: {
      name: string;
      profilePic: string;
    };
    imageURL: string;
    type: {
      name: string;
      color: string;
    };
    totalTime: number;
    pointScore: number;
    rating: object;
    instructors: {
      name: string;
      type: {
        name: string;
        color: string;
      };
      profilePic: string;
    }[];
    price: {
      name: string;
    };
  };
  type?: string;
}

const CCard: React.FC<props> = ({data, type}) => {
  if (type === 'Articles') {
    return (
      <View style={articlesStyles.container}>
        <View style={articlesStyles.imageContainer}>
          <Image
            source={{uri: data.imageUrlPreview}}
            style={articlesStyles.image}
          />
        </View>
        <View style={articlesStyles.detailContainer}>
          <Text style={fonts.robotoSubTitle} numberOfLines={2}>
            {data.title}
          </Text>
          <Text style={fonts.nunitoRegular}>
            <Text style={{...fonts.nunitoRegular, color: data.category.color}}>
              {data.category.name}
            </Text>{' '}
            | {data.created_date}. {data.timeOfRead} menit membaca
          </Text>
          <CProfile
            name={data.instructor.name}
            image={data.instructor.profilePic}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: data.imageURL
                ? data.imageURL
                : 'https://qubisastorage.blob.core.windows.net/files/microlearnings/2977/images/img480/2977-20211012172656095.jpg',
            }}
            style={styles.image}
          />
          <Text
            style={[
              styles.typeTitle,
              {
                backgroundColor: data.type.color,
              },
            ]}>
            {data.type.name}
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.detailContainer}>
            <View style={{flex: 1}}>
              <Text style={fonts.robotoSubTitle} numberOfLines={2}>
                {data.title}
              </Text>
            </View>
            {data.totalTime ? (
              <Text style={fonts.nunitoRegular}>
                {data.pointScore} menonton. durasi {data.totalTime}
              </Text>
            ) : (
              <CRating rating={data.rating} />
            )}
            {data.instructors && (
              <CProfile
                name={data.instructors[0].name}
                type={data.instructors[0].type.name}
                image={data.instructors[0].profilePic}
              />
            )}
          </View>
          <View style={styles.priceContainer}>
            <Text style={[fonts.robotoSubTitle, {fontWeight: '700'}]}>
              {data.price.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

export default CCard;

const styles = StyleSheet.create({
  container: {
    height: height / 2.5,
    width: width / 1.5,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  typeTitle: {
    ...fonts.nunitoRegular,
    color: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    position: 'absolute',
    left: 10,
    bottom: 10,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColors,
    paddingHorizontal: 10,
  },
  detailContainer: {
    flex: 0.75,
  },
  priceContainer: {
    borderTopWidth: 2,
    borderColor: colors.borderColors,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 0.25,
  },
});
