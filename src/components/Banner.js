import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLORS, icons, images} from '../constants';
import FastImage from 'react-native-fast-image';
const Banner = ({
  text1,
  text2,
  text3,
  image,
  viewPress,
  buttonPress,
  button,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={viewPress}>
      <View style={{width: '50%', marginTop: 10}}>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: 'Poppins-Regular',
            fontWeight: '700',
            fontSize: 25,
            letterSpacing: 0.2,
          }}>
          {text1}
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: 14,
            letterSpacing: 0.4,
          }}>
          {text2}
        </Text>
        <Text
          style={{
            color: '#C7C7C7',
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: 12,
            letterSpacing: 0.6,
            marginTop: 10,
          }}>
          {text3}
        </Text>
        {button?(<TouchableOpacity
          style={{
            height: 36,
            width: 75,
            backgroundColor: COLORS.TabColor,
            marginTop: 25,
            borderRadius: 10,
            justifyContent: 'center',
          }}
          onPress={buttonPress}>
          <Text
            style={{
              color: COLORS.white,
              fontFamily: 'Poppins-Regular',
              fontWeight: '500',
              fontSize: 14,
              letterSpacing: 0.2,
              textAlign: 'center',
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>):null}
      </View>
      <FastImage
        source={image}
        style={{height: 170, width: 155, borderRadius: 15}}
        resizeMode="contain"
      />
    </TouchableOpacity>
    //   <View style={styles.container}>
    //     {icon ? (
    //       <TouchableOpacity
    //         style={[styles.backButton, backButton]}
    //         onPress={onPress}>
    //         <Image source={icons.buttoncircle} style={styles.iconStyle} />
    //       </TouchableOpacity>
    //     ) : (
    //       <View style={{height: 30, width: 30, marginTop: 20}}></View>
    //     )}
    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         marginTop: 10,
    //         alignItems: 'center',
    //       }}>
    //       {logo && <Image source={images.logo} style={styles.logoStyle} />}
    //       {screen && (
    //         <Image source={screen} style={[styles.screen, screenStyle]} />
    //       )}
    //     </View>

    //     <Text style={styles.heading}>{heading}</Text>
    //     <Text style={styles.subHeading}>{subHeading}</Text>
    //   </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    //   padding: 10,
    //   backgroundColor: COLORS.backgroundColor,
    backgroundColor: COLORS.buttonColor,
    height: 200,
    width: '90%',
    marginBottom: 10,
    // marginRight: 10,
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    // height:215,
    //   marginTop: Platform.OS == 'android' ? -20 : 0,
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  logoStyle: {
    height: 60,
    width: 60,
  },
  screen: {
    height: 95,
    width: 150,
    // top: 50,
    left: 30,
    // alignSelf:'flex-end',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
    // top: 20,
    // marginVertical: 5,
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
    // borderWidth: 1,
    // borderColor: COLORS.white,
    // borderRadius: 17,
    // top: 50,
    marginTop: 40,
    // backgroundColor:'red',
  },
});
