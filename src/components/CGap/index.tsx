import React from 'react';
import {View} from 'react-native';

interface props {
  height?: number;
  width?: number;
}

const CGap: React.FC<props> = ({height, width}) => {
  return <View style={{height, width}} />;
};

export default CGap;
