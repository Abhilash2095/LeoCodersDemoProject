import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

//  - Create a user registration form with fields for name, email, phone number, DOB, gender, habits, "About Me" description, and profile photo upload with validation.
const Signup = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [DOB, setDOB] = useState('');
  const [gender, setgender] = useState('');
  const [habits, sethabits] = useState('');
  const [description, setdescription] = useState('');
  const [profilePic, setprofilePic] = useState(null);

  const ChooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setprofilePic(image?.path, image?.mime);
    });
  };

  const HandleRegister = async () => {
    if (
      !username ||
      !email ||
      !phone ||
      !DOB ||
      !gender ||
      !habits ||
      !description ||
      !profilePic
    ) {
      Alert.alert('Validation Error', 'All Fields are required');
      return;
    }
    try {
      const userData = {
        username,
        email,
        phone,
        DOB,
        gender,
        habits,
        description,
        profilePic,
      };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      console.log(userData);
      props.navigation.navigate('Signin');
      Alert.alert('UserRegistered Successfully');
    } catch (err) {
      console.log('error', err);
      Alert.alert('User is not Registered');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <TouchableOpacity
        onPress={ChooseImage}
        style={{
          backgroundColor: 'red',
          height: 100,
          width: 100,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        {profilePic ? (
          <Image
            source={{uri: profilePic}}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              resizeMode: 'cover',
              alignSelf: 'center',
            }}
          />
        ) : (
          <Text>Image</Text>
        )}
      </TouchableOpacity>
      {/* <View style={{backgroundColor:'red',justifyContent:'space-between',}}> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>Username:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="UserName"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>email:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>phone:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="phone"
          value={phone}
          keyboardType="number-pad"
          onChangeText={setphone}
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>DOB:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="DOB"
          value={DOB}
          onChangeText={setDOB}
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>Gender:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="Gender"
          value={gender}
          onChangeText={setgender}
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>Habits:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="Habits"
          value={habits}
          onChangeText={sethabits}
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>description:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="description"
          value={description}
          onChangeText={setdescription}
          placeholderTextColor={'black'}
        />
      </View>
      {/* </View> */}

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          HandleRegister();
          // props.navigation.navigate('Signin');
        }}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    padding: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    height: 40,
    width: '50%',
    borderRadius: 15,
    backgroundColor: '#43A8F7',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
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
});
