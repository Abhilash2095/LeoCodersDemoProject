import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, constants, icons} from './constants';

const Tab_View = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <View style={styles.innerMainView}>
        <TouchableOpacity
          onPress={props.home_tab1}
          style={[styles.TouchableStyle]}>
            {props?.an_flag1 == false ? (
            <Image
              source={icons.home}
              style={{
                height: 25,
                width: 25,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={icons.tabhomename}
              style={{
                height: 35,
                width: 90,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          )}
          {/* <Image
            source={icons.home}
            style={[
              styles.iconStyle,
              {tintColor: props.an_flag1 ? COLORS.appRed : COLORS.tab},
            ]}
            resizeMode="contain"
          />

          <Text
            style={[
              styles.labelStyle,
              {color: props.an_flag1 ? COLORS.appRed : COLORS.tab},
            ]}>
            {'Home'}
          </Text> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.home_tab2}
          style={[styles.TouchableStyle]}>
             {props?.an_flag2 == false ? (
            <Image
              source={icons.tabfriend}
              style={{
                height: 25,
                width: 25,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={icons.tabfriendname}
              style={{
                height: 35,
                width: 90,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          )}
          {/* <Image
            source={icons.tab_request}
            style={[
              styles.iconStyle,
              {tintColor: props.an_flag2 ? COLORS.appRed : COLORS.tab},
            ]}
            resizeMode="contain"
          />

          <Text
            style={[
              styles.labelStyle,
              {color: props.an_flag2 ? COLORS.appRed : COLORS.tab},
            ]}>
            {'Request Form'}
          </Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.home_tab3}
          style={[styles.TouchableStyle]}>
            {props?.an_flag3 == false ? (
            <Image
              source={icons.tabbrandlogo}
              style={{
                height: 25,
                width: 25,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={icons.tabbrandname}
              style={{
                height: 35,
                width: 90,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          )}
          {/* <Image
            source={icons.tab_contact}
            style={[
              styles.iconStyle,
              {tintColor: props.an_flag3 ? COLORS.appRed : COLORS.tab},
            ]}
            resizeMode="contain"
          />

          <Text
            style={[
              styles.labelStyle,
              {color: props.an_flag3 ? COLORS.appRed : COLORS.tab},
            ]}>
            {'Contact'}
          </Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.home_tab4}
          style={[styles.TouchableStyle]}>
            {props?.an_flag4 == false ? (
            <Image
              source={icons.settings}
              style={{
                height: 25,
                width: 25,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={icons.tabbrandsetting}
              style={{
                height: 35,
                width: 90,
                // tintColor: '#1AB4D7'
              }}
              resizeMode="contain"
            />
          )}
          {/* <Image
            source={icons.tab_profile}
            style={[
              styles.iconStyle,
              {tintColor: props.an_flag4 ? COLORS.appRed : COLORS.tab},
            ]}
            resizeMode="contain"
          />

          <Text
            style={[
              styles.labelStyle,
              {color: props.an_flag4 ? COLORS.appRed : COLORS.tab},
            ]}>
            {'Profile'}
          </Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab_View;

const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    height: 75,
  },
  mainView: {
    // flex: 1,
    height: 70,
    width: '95%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.TabColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    borderRadius:30
  },
  innerMainView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '95%',
    alignItems: 'center',
  },
  TouchableStyle: {
    alignItems: 'center',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
  labelStyle: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
});
