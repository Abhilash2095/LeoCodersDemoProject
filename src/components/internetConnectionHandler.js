import NetInfo from '@react-native-community/netinfo';
import React, {Fragment} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const internetConnectionHandler = Component => {
  return class CompoundComponent extends React.Component {
    state = {
      isConnectionError: false,
    };

    componentDidMount() {
      this.unsubscribe = NetInfo.addEventListener(state =>
        this.handleConnectivityChange(state.isConnected),
      );
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    handleConnectivityChange = isConnected => {
      this.setState({isConnectionError: !isConnected});
    };

    handleClose = () => {
      this.setState({isConnectionError: false});
    };

    render() {
      return (
        <>
          <Fragment>
            <Modal
              transparent={true}
              visible={this.state.isConnectionError}
              onRequestClose={() => {}}>
              <View style={style.transparentView}>
                <View style={style.parentView}>
                  <View
                    style={{
                      height: 35,
                      width: 35,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      style={{justifyContent: 'center', alignItems: 'center'}}
                      onPress={() => this.handleClose()}>
                      {/* <Image style={{ height: 18 }} source={Icons.vector} resizeMode="contain" /> */}
                    </TouchableOpacity>
                  </View>
                  {/* <Image style={style.emojiImage} source={Icons.Internet} /> */}
                  <Text
                    style={[
                      {
                        fontSize: 18,
                        alignSelf: 'center',
                        textAlign: 'center',
                        marginTop: 10,
                        lineHeight: 20,
                        color: 'black',
                        alignSelf: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                      },
                    ]}>{`Looks like you don’t have an internet connection. Please reconnect and try again.`}</Text>
                </View>
              </View>
            </Modal>
            <Component {...this.props} />
          </Fragment>
        </>
      );
    }
  };
};

const style = StyleSheet.create({
  transparentView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  parentView: {
    height: '18%',
    width: width - 60,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiImage: {marginTop: 25, height: 15, width: 15},
  mainView: {alignSelf: 'center', height: 'auto', width: '80%'},
  btn: {
    height: 40,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nextText: {color: 'red', fontSize: 17, fontWeight: '800'},
});

export default internetConnectionHandler;
