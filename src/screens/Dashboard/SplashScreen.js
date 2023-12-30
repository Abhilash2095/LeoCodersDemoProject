import React, {useEffect} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import FetchSavedDetails from '../../components/FetchSavedDetails';
import {COLORS, images} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  console.log('heighttt', height);
  console.log('widthh', width);

  useEffect(() => {
    // AsyncStorage.getItem('userLogin').then(res => {
    //   // setToken(res);
    //   if (res != null) {
    //     setTimeout(() => {
    //       // props.navigation.navigate('Home');
    //     }, 1500);
    //   } else {
        setTimeout(() => {
          props.navigation.navigate('Signin');
        }, 1500);
    //   }
    // });
  }, []);

  return (
    <View style={styles.container}>
       <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle={'light-content'}
          translucent={true}
        />
      <FastImage
        // source={images.logoname}
        // priority: FastImage.priority.high,
        // resizeMode:FastImage.resizeMode.contain,
        style={{
          height: 290,
          width: 190,
        }}></FastImage>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
