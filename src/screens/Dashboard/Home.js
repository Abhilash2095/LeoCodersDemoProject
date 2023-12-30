import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../../constants';
import {useAuth} from '../../Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = props => {
  // const {state,dispatch}= useAuth();
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const users = await AsyncStorage.getAllKeys();
        const usersList = await AsyncStorage.multiGet(users);
        console.log('DATAuserList', usersList);
        setUser(usersList.map(([key, value]) => JSON.parse(value)));
        console.log('DATA', user);
      } catch (err) {
        console.log('Error Fetching', err);
      }
    };
    fetchUserData();
  }, []);

  // pritamramtekework@gmail.com

  const handleDelete = async () => {
    try {
      await AsyncStorage.removeItem(selectedUser.email);
      const users = await AsyncStorage.getAllKeys();
      const usersList = await AsyncStorage.multiGet(users);
      setUser(usersList.map(([key, value]) => JSON.parse(value)));
      Alert.alert('User Deleted Succesfully');
    } catch (err) {
      Alert.alert('Error');
    }
  };

  const modalVisible = users => {
    setSelectedUser(users);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
    props.navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => {
          // props.navigation.goBack('');
        }}>
        <Image source={icons.headerback} style={styles.back} />
      </TouchableOpacity>
      {/* <Text>Verification</Text> */}
      <View>
        <Text style={{color: 'black', fontSize: 16}}> Welcome, Admin</Text>
        <FlatList
          data={user}
          keyExtractor={user => user.email}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                console.log('item', item);
                modalVisible();
              }}>
              <Text style={{color: 'black', fontSize: 16}}>
                {item.username}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.back1Container}
        onPress={() => {
          handleLogout();
          //   props.navigation.navigate('ProfileScreen');
        }}>
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          props.navigation.navigate('ProfileScreen');
        }}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} onRequestClose={closeModal}>
        {selectedUser && (
          <View style={{backgroundColor: 'blue', height: '40%'}}>
            <Text style={{color: 'black', fontSize: 16}}>User Details:</Text>
            <Text style={{color: 'black', fontSize: 16}}>
              Name: {selectedUser.username}
            </Text>
            <Text style={{color: 'black', fontSize: 16}}>
              Email: {selectedUser.email}
            </Text>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default Home;

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
