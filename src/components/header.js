import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../constants';
import FastImage from 'react-native-fast-image';

const Header = ({
  headerText,
  containerStyle,
  headerStyle,
  onPress,
  image,
  name,
  headerStyle1,
  headerStyle2,
  header1Text,
  onPress2,
  onPress1,
  innerView
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <SafeAreaView style={[styles.innerView,innerView]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.touchableStyle} onPress={onPress}>
            <FastImage source={image} style={styles.iconStyle} resizeMode="contain"/>
          </TouchableOpacity>
          <View style={{marginLeft:10}}>
            <View style={{flexDirection: 'row', }}>
              <Text style={[styles.headerTextStyle, headerStyle]}>
                {headerText}
              </Text>
              <Text style={[styles.headerTextStyle2, headerStyle1]}>{name}</Text>
            </View>

            <Text style={[styles.headerTextStyle1, headerStyle2]}>
              {header1Text}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.touchableStyle1} onPress={onPress1}>
          <FastImage
            source={icons.notification}
            style={{height: 22, width: 22}}
            resizeMode="contain"
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableStyle2} onPress={onPress2}>
          <FastImage
            source={icons.scanner}
            style={{height: 22, width: 22}}
            resizeMode="contain"
          />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: Platform.OS == 'android' ?'15%':'17%',
    backgroundColor: COLORS.backgroundColor,
    padding: 10,
    // paddingTop: '10%',
    paddingTop: Platform.OS == 'android' ? 40 : 0,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    // width:'100%'
    // borderTopLeftRadius:10,
    // borderTopRightRadius:10
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
// marginTop:30,
    // backgroundColor: 'red',
    // height:130,
    height:Platform.OS == 'android' ?60:130

  },
  iconStyle: {
    height: 40,
    width: 40,
  },
  touchableStyle: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

  },
  headerTextStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 18,
    // lineHeight: 39,
    color: COLORS.white,
    letterSpacing:0.2
  },
  headerTextStyle2: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 18,
    // lineHeight: 39,
    color: COLORS.white,
    letterSpacing:0.2,
    left:5
  },
  headerTextStyle1: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 11,
    // lineHeight: 39,
    color: COLORS.white,
    letterSpacing:0.2
  },
  touchableStyle1: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor:COLORS.white,
    borderWidth:1,
right:10
  },
  touchableStyle2: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor:COLORS.white,
    borderWidth:1
  },
});
