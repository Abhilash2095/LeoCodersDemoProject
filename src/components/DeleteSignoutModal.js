import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {COLORS} from '../constants';

const CustomModal = ({
  dismiss,
  modalVisible,
  closeModal,
  headerLabel,
  innerLabelText,
  actionbutton,
  onNavigate,
}) => {
  return (
    <View style={[styles.centeredView]}>
      <Modal
        animationType="slide"
        transparent
        backdropOpacity={1}
        visible={modalVisible}
        onRequestClose={dismiss}>
        <TouchableWithoutFeedback onPress={dismiss}>
          <View style={[styles.centeredView, {flex: 1}]}>
            <View style={styles.modalView}>
              <Text
                style={[
                  styles.ForgotLabelText2,
                  {marginBottom: 0, fontFamily: 'Poppins-Medium'},
                ]}>
                {headerLabel}
              </Text>

              <View style={styles.UnderlineView}></View>

              <Text style={styles.ResetStyle}>{innerLabelText}</Text>

              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={[
                    styles.ButtonStyle,
                    {borderWidth: 1.5, borderColor: COLORS.inputText},
                  ]}
                  onPress={closeModal}>
                  <Text style={styles.CancelButtonText}>{'Cancel'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onNavigate}
                  style={[
                    styles.ButtonStyle,
                    {backgroundColor: COLORS.appRed},
                  ]}>
                  <Text
                    style={[styles.CancelButtonText, {color: COLORS.white}]}>
                    {actionbutton}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    blurRadius: 1,
  },
  modalView: {
    height: 'auto',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
  },
  UnderlineView: {
    borderWidth: 0.4,
    width: '100%',
    borderColor: COLORS.account_line,
    marginTop: 15,
  },

  ForgotLabelText2: {
    marginVertical: '5%',
    color: COLORS.black,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    fontSize: 23,
    letterSpacing: 0.4,
    lineHeight:34.5
  },
  buttonView: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  ButtonStyle: {
    // padding: 15,
    backgroundColor: COLORS.buttonBG,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '45%',
    height: 45,
  },
  ResetStyle: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: COLORS.inputText,
    letterSpacing: 0.2,
    marginVertical: 10,
    width: '80%',
    textAlign: 'center',
    letterSpacing: 0.8,
    lineHeight: 20,
  },
  CancelButtonText: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: COLORS.black,
    letterSpacing: 0.2,
    lineHeight:22.5
  },
});

export default CustomModal;
