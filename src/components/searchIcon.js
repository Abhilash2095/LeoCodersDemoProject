import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../src/constants';
const SearchIcon = ({props, onPress,onChangeText,value}) => {
  const [name, setonChangeName] = useState('');

  return (
    <TouchableOpacity style={styles.search1} onPress={onPress}>
      <View style={styles.search}>
        <Image source={icons.search} style={styles.searchicon} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        mode="outlined"
        placeholderTextColor={'black'}
        placeholder="Search Here"
        theme={{roundness: 10}}
      />
    </TouchableOpacity>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  search1: {
    width: '90%',
    // height: '30%',
    backgroundColor: '#E6E6E6',
    alignSelf: 'center',
    // padding: ,
    borderRadius: 10,
    height: 50,
    // marginVertical: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginLeft:10
    // marginRight: 6,
  },
  searchicon: {
    height: 22,
    width: 22,
    // marginRight: 15,
  },
  input: {
    color: '#000',
    marginLeft: 5,
    width: '95%',
    // backgroundColor: 'red',
  },
  search: {
    // backgroundColor: 'red',
    marginLeft: 10,
  },
});
