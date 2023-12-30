import {Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../constants';
import FastImage from 'react-native-fast-image';

const BackButton = (
    {buttonText,buttonContainer,onPress,buttonTextStyle}
    ) => {
  return (
    <TouchableOpacity style={[styles.container,buttonContainer]} 
    onPress={onPress}
    >
        <Image source={icons.headerback} style={{height:22,width:22,}} tintColor={'black'} resizeMode='contain'/>
      {/* <Text style={[styles.buttonTextStyle,buttonTextStyle]}>{buttonText}</Text> */}
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height:30,
    width: 30,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop:40,
    borderWidth:1,
    marginLeft:15,

  },
  buttonTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    // lineHeight: 27,
    color: COLORS.white,
    textAlign:'center'
  },
});
