import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {icons} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';

const ProfileScreen = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          console.log('DATA', user);
          setUserData(user);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  const markAttendance = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const{latitude,longnitude}=position.coords;
        Alert.alert('Attendance',`Latitude:${latitude},Longnitude:${longnitude}`);
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => {
          props.navigation.goBack('');
        }}>
        <Image source={icons.headerback} style={styles.back} />
      </TouchableOpacity>
      <Text>Profile</Text>
      {userData ? (
        <View>
          <TouchableOpacity
            // onPress={ChooseImage}
            style={{
              backgroundColor: 'red',
              height: 100,
              width: 100,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            {userData?.profilePic ? (
              <Image
                source={{uri: userData?.profilePic}}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  resizeMode: 'cover',
                  alignSelf: 'center',
                }}
              />
            ) : null}
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Welcome , {userData?.username}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Email : {userData?.email}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Phone : {userData?.phone}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Hobbies : {userData?.habits}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            "About Me" : {userData?.description}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            DOB : {userData?.DOB}
          </Text>
        </View>
      ) : (
        <Text>You are not Logged in</Text>
      )}
      <TouchableOpacity
        style={styles.back1Container}
        onPress={() => {
          markAttendance();
          //   props.navigation.navigate('ProfileScreen');
        }}>
        <Text style={styles.button}>Mark Attandance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          props.navigation.navigate('ProfileScreen');
        }}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    padding: 15,
  },
  buttonContainer: {
    height: 40,
    width: '50%',
    borderRadius: 15,
    backgroundColor: '#43A8F7',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  button: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  backContainer: {
    height: 35,
    width: 35,
    borderRadius: 17,
    backgroundColor: '#43A8F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  back1Container: {
    height: 40,
    width: '50%',
    borderRadius: 15,
    backgroundColor: '#43A8F7',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
});
