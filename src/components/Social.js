import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import FastImage from 'react-native-fast-image';

const Social = ({image,buttonContainer,onPress,buttonImage}) => {
  return (
    <TouchableOpacity style={[styles.container,buttonContainer]} onPress={onPress}>
       <FastImage
        source={image}
        // priority: FastImage.priority.high,
        // resizeMode:FastImage.resizeMode.contain,
        style={[styles.button,buttonImage]}></FastImage>
    </TouchableOpacity>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
   
  },
  button: {
    height: 40,
    width: 40,
  },
});
