import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../constants';
import {useAuth} from '../../Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = props => {
  // const {dispatch} = useAuth();
  const [userName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = async () => {
    if (userName === 'admin' && Password === 'admin') {
      const user = {userName, isAdmin: true};
      await AsyncStorage.setItem('userLogin', JSON.stringify(user));
      // dispatch({type: 'LOGIN', payload: {user, isAdmin: true}});
      props.navigation.navigate('Home');
    } else if (userName !== '' && Password !== '') {
      const user = {userName, isAdmin: false};
      await AsyncStorage.setItem('userLogin', JSON.stringify(user));
      // dispatch({type: 'LOGIN', payload: {user, isAdmin: false}});
      props.navigation.navigate('ProfileScreen');
    } else {
      Alert.alert('Invalid Details');
    }
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
      <Text>SignIn</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
          value={userName}
          onChangeText={setUserName}
          placeholderTextColor={'black'}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Text style={{color: 'black', fontSize: 16}}>Password:</Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: 'grey',
            height: 40,
            width: '60%',
            borderRadius: 10,
            marginLeft: 10,
          }}
          placeholder="Password"
          value={Password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={'black'}
        />
      </View>
      <TouchableOpacity
        style={styles.back1Container}
        onPress={() => {
          // handleLogin();
          props.navigation.navigate('Signup');
        }}>
        <Text style={styles.button}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          handleLogin();
          // props.navigation.navigate('Home');
        }}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

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
