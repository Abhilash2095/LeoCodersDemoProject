import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS, icons} from '../constants';

const MyAccountContainer = ({
  BackArrow,
  ScreenTitle,
  ScreenSubTitle,
  onPressGo,
  Icon,
  imageStyle,
  Chevron,
  ImageIcon,
  title,
}) => {
  return (
    <SafeAreaView style={styles.InnerContainer}>
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop:Platform.OS == 'android' ?20:0
        }}>
        <TouchableOpacity style={styles.TextView} onPress={onPressGo}>
          <Image source={Icon} style={[styles.ImageStyle, imageStyle]} />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.TextView} onPress={onPressGo}> */}
        <Text style={[styles.TitleText, title]}>{ScreenTitle}</Text>
        {Chevron ? (
          <Image
            source={icons.black_chevron}
            style={[styles.ChevronStyle, imageStyle]}
          />
        ) : (
          <View style={styles.ChevronStyle}></View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyAccountContainer;

const styles = StyleSheet.create({
  InnerContainer: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.backgroundColor,
    // borderRadius: 10,
    marginBottom: 10,
    height: Platform.OS == 'android' ? 100 : 120,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:30
  },

  BackArrow1: {
    height: 40,
    width: 40,
  },
  ImageStyle: {
    height: 32,
    width: 32,
  },
  TitleText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: COLORS.white,
    fontWeight: '500',
    lineHeight: 22.5,
    fontWeight: '600',
  },
  ChevronStyle: {
    height: 20,
    width: 20,
  },
  TextView: {
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'space-between',
    // marginLeft: 15,
    // marginTop:50
    // backgroundColor:'red'
  },
});
