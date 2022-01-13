import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../assets';
import {fonts} from '../../styles';

interface props {
  rating: object;
}

const CRating: React.FC<props> = ({rating}) => {
  const {avgRatingScore, countRatingScore} = rating;
  const renderStars = () => {
    let stars = Array();
    for (let i = 1; i <= 5; i++) {
      if (i <= avgRatingScore) {
        stars.push(<IcStarOn key={i} />);
      } else {
        stars.push(<IcStarOff key={i} />);
      }
    }
    return stars;
  };
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStars()}</View>
      <Text style={fonts.nunitoRegular}>
        {avgRatingScore} ( {countRatingScore} ulasan )
      </Text>
    </View>
  );
};

export default CRating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
});
