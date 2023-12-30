import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants';

export default function ErrorView(props) {
  return (
    <View style={{...styles.container, ...props.style}}>
      {props.show && <Text style={styles.text}>{props.text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    color: COLORS.TabColor,
    fontSize: 13,
    // marginLeft: 20,
    // marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
});
