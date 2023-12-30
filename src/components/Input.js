import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../constants';

const InputText = ({
  containerStyle,
  inputStyle,
  placeholder,
  iconStyle,
  secureTextEntry,
  keyboardType,
  maxLength,
  value,
  onChangeText,
  editable,
  validation,
  onEndEditing,
  validationText,
  validationTextStyle,
  onSubmitEditing,
  image,
  onPress2,
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      {/* <Image
        style={{
          height: 20,
          width: 20,
          color: '#000',
          marginLeft: 15,
          resizeMode: 'contain',
        }}
        source={props.InputIcon}
      /> */}
      <TextInput
        style={[styles.inputText, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.inputText}
        underlineColorAndroid={'transparent'}
        secureTextEntry={secureTextEntry}
        // onFocus={() => setState({ borderColor: colors.appBackground })}
        // onBlur={() => setState({ borderColor: colors.title })}
        keyboardType={keyboardType}
        maxLength={maxLength}
        value={value}
        // onKeyPress={props.onKeyPress}
        autoCorrect={false}
        // multiline={props.multiline}
        onChangeText={onChangeText}
        editable={editable}
        onEndEditing={onEndEditing}
        autoCapitalize={'none'}
        // autoFocus={true}
        // blurOnSubmit={true}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity onPress={onPress2} style={{position:'absolute',right:10}}>
        <Image source={image} style={[styles.eyeStyle,iconStyle]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBackground,
    alignSelf: 'center',
    zIndex: 0,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
    borderWidth:1
    // justifyContent: 'space-between',

  },
  inputText: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: COLORS.black,
    width:'90%',
    marginLeft:5,
    
  },
  eyeStyle: {
    height: 25,
    width: 25,
  },
});

export default InputText;
