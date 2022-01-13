import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcMenuOff,
  IcMenuOn,
  IcSearchOff,
  IcSearchOn,
} from '../../assets';
import {colors, fonts} from '../../styles';

const CBottomNavigator = ({state, descriptors, navigation}) => {
  const Icon = ({label, focus}) => {
    switch (label) {
      case 'Home':
        return focus ? (
          <IcHomeOn width={24} height={24} />
        ) : (
          <IcHomeOff width={24} height={24} />
        );
      case 'Search':
        return focus ? (
          <IcSearchOn width={24} height={24} />
        ) : (
          <IcSearchOff width={24} height={24} />
        );
      case 'Menu':
        return focus ? (
          <IcMenuOn width={24} height={24} />
        ) : (
          <IcMenuOff width={24} height={24} />
        );
      default:
        return <IcHomeOn />;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={{alignItems: 'center'}}>
              <Icon label={label} focus={isFocused} />
            </View>
            <Text
              style={{
                ...fonts.nunitoMedium,
                color: isFocused ? colors.primary : colors.black,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CBottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 13,
    backgroundColor: colors.white,
  },
});
