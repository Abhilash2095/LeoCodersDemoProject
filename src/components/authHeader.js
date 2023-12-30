import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, icons, images} from '../constants';
const AuthHeader = ({
  icon,
  heading,
  subHeading,
  onPress,
  logo,
  screen,
  screenStyle,
  backButton,
  heading1,
  image,
  logoStyle,
  icon1,
  onPress1,
  outButton,
  headers,
}) => {
  return (
    <View style={styles.container}>
      {icon ? (
        <TouchableOpacity
          style={[styles.backButton, backButton]}
          onPress={onPress}>
          <Image source={icons.buttoncircle} style={styles.iconStyle} />
        </TouchableOpacity>
      ) : (
        <View style={{height: 30, width: 30, marginTop: 20}}></View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          alignItems: 'center',
          
        }}>
        {logo && <Image source={image} style={[styles.logoStyle, logoStyle]} />}
        {screen && (
          <ImageBackground source={screen} style={[styles.screen, screenStyle]} >
            
          </ImageBackground>
        )}
      </View>
      
      <View style={[styles.headers, headers]}>
        <Text style={[styles.heading, heading1]}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
        {icon1 ? (
        <TouchableOpacity
          style={[styles.outButton, outButton]}
          onPress={onPress1}>
          <Image source={icons.power} style={styles.iconStyle} />
        </TouchableOpacity>
      ) : null}
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.backgroundColor,
    // height:215,
    marginTop: Platform.OS == 'android' ? -20 : 0,
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
  logoStyle: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  },
  screen: {
    height: 95,
    width: 150,
    left: 30,
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,    
    color: COLORS.white,
  },
  subHeading: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.white,
    // top: 20,
  },
  backButton: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  outButton: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 50,
    backgroundColor: COLORS.white,
    position: 'absolute',
    right: 30,
  },
  headers: {
    // backgroundColor:'red'
  },
});
