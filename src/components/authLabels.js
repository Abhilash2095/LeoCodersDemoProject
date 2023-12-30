import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../constants';

const AuthLabels = ({
  labelText,
  labelIcons,
  icon,
  labelStyle,
  containerStyle,
  iconStyle2,
  seeall,
  seeAllOnpress
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* {!icon ? (
        <Image source={labelIcons} style={[styles.iconStyle, iconStyle2]} />
      ) : (
        <></>
      )} */}
      <Text style={[styles.labelStyle, labelStyle]}>{labelText}</Text>
      {seeall ? (
        <TouchableOpacity onPress={seeAllOnpress}>
        <Text style={[styles.seeAllStyle]}>{'View All'}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AuthLabels;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  labelStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    color: COLORS.black,
  },
  seeAllStyle:{
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 27,
    color: COLORS.appRed,
    alignSelf:'center',
  }
});
