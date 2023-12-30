import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const Button = ({buttonText,buttonContainer,onPress,buttonTextStyle}) => {
  return (
    <TouchableOpacity style={[styles.container,buttonContainer]} onPress={onPress}>
      <Text style={[styles.buttonTextStyle,buttonTextStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical:10
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
