import AsyncStorage from '@react-native-async-storage/async-storage';

const FetchSavedDetails = {
  setUserToken: async function (token) {
    try {
      console.log('userTokenuserToken', JSON.stringify(token));
      await AsyncStorage.setItem('userToken', JSON.stringify(token));
    } catch (e) {
      console.log('token set error fetchsaved.js---', e);
    }
  },
  setUserName: async function (token) {
    try {
      await AsyncStorage.setItem('userName', token);
    } catch (e) {
      console.log('token set error fetchsaved.js---', e);
    }
  },
  setProfilePhoto: async function (token) {
    try {
      await AsyncStorage.setItem('profilePhoto', token);
    } catch (e) {
      console.log('token set error fetchsaved.js---', e);
    }
  },
  setUserEmail: async function (token) {
    try {
      await AsyncStorage.setItem('userEmail', token);
    } catch (e) {
      console.log('token set error fetchsaved.js---', e);
    }
  },
  setUserArea: async function (area) {
    try {
      await AsyncStorage.setItem('area', area);
      console.log('setuserarea====', area);
    } catch (e) {
      console.log('area set error fetchsaved.js---', e);
    }
  },

  getUserToken: async function () {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token !== null) {
        console.log('token saved data = ', token);

        return JSON.parse(token);
      }
    } catch (e) {
      // error reading value
      console.log('error while reading token value = ', e);
    }
    return null;
  },
  getUserArea: async function () {
    try {
      const userArea = await AsyncStorage.getItem('area');
      if (userArea !== null) {
        console.log('area saved data = ', userArea);

        return userArea;
      } else {
        console.log('area is  ==', userArea);
      }
    } catch (e) {
      // error reading value
      console.log('error while reading area value = ', e);
    }
    return null;
  },
  setAreaDetails: async function (data) {
    try {
      await AsyncStorage.setItem('details', data);
    } catch (e) {
      console.log('area set error fetchsaved.js---', e);
    }
  },
  getAreaDetails: async function () {
    try {
      const area = await AsyncStorage.getItem('details');
      if (area !== null) {
        console.log('area saved data = ', area);

        return area;
      }
    } catch (e) {
      // error reading value
      console.log('error while reading area value = ', e);
    }
    return null;
  },
  removeUserArea: async function () {
    try {
      await AsyncStorage.removeItem('area');
      return true;
    } catch (e) {
      console.log('area remove error fetchsaved.js---', e);
      return false;
    }
  },
  removeAreaDetails: async function () {
    try {
      await AsyncStorage.removeItem('details');
      return true;
    } catch (e) {
      console.log('area remove error fetchsaved.js---', e);
      return false;
    }
  },

  setSaveCard: async function () {
    try {
      await AsyncStorage.setItem('card');
    } catch (e) {
      console.log('set card error fetchsaved.js---', e);
    }
  },
  getSaveCard: async function () {
    try {
      const card = await AsyncStorage.getItem('card');
      if (card !== null) {
        console.log('token saved data = ', token);

        return card;
      }
    } catch (e) {
      // error reading value
      console.log('error while reading token value = ', e);
    }
    return null;
  },

  setUserRole: async function (role) {
    try {
      await AsyncStorage.setItem('role', role);
    } catch (e) {
      console.log('role set error fetchsaved.js---', e);
    }
  },
  setSubscriptionPlan: async function (plan) {
    try {
      await AsyncStorage.setItem('plan', plan);
    } catch (e) {
      console.log('plan set error fetchsaved.js---', e);
    }
  },

  removeUserToken: async function (token) {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (e) {
      console.log('token set error fetchsaved.js---', e);
      return false;
    }
  },
  removeSubscriptionPlan: async function () {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (e) {
      console.log('plan set error fetchsaved.js---', e);
      return false;
    }
  },

  removeAllData: async function () {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('area');
      await AsyncStorage.removeItem('plan');
      await AsyncStorage.removeItem('role');
      await AsyncStorage.removeItem('card');
    } catch (e) {
      console.log('token email removal error app.js', e);
    }
    // const asyncStorageKeys = await AsyncStorage.getAllKeys();
    // if (asyncStorageKeys.length > 0) {
    //   if (Platform.OS === 'android') {
    //     await AsyncStorage.clear();
    //   }
    //   if (Platform.OS === 'ios') {
    //     await AsyncStorage.multiRemove(asyncStorageKeys);
    //   }
    // }
  },

  getUserEmail: async function () {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      if (email !== null) {
        console.log('Email saved data = ', email);

        return email;
      } else console.log('error while fetching async ddd data');
    } catch (e) {
      // error reading value
      console.log('error while reading value = ', e);
    }
    return null;
  },
  getUserName: async function () {
    try {
      const Username = await AsyncStorage.getItem('userName');
      if (Username !== null) {
        console.log('Email saved data = ', Username);

        return Username;
      } else console.log('error while fetching async cred data');
    } catch (e) {
      // error reading value
      console.log('error while reading value = ', e);
    }
    return null;
  },
  getProfilePhoto: async function () {
    try {
      const profilePhoto = await AsyncStorage.getItem('profilePhoto');
      if (profilePhoto !== null) {
        console.log('Profile photo data = ', profilePhoto);

        return profilePhoto;
      } else console.log('error while fetching async cred data');
    } catch (e) {
      // error reading value
      console.log('error while reading value = ', e);
    }
    return null;
  },

  getUserRole: async function () {
    try {
      const role = await AsyncStorage.getItem('role');
      if (role !== null) {
        console.log('role saved data = ', role);

        return role;
      }
    } catch (e) {
      // error reading value
      console.log('error while reading role value = ', e);
    }
    return null;
  },

  getSubscriptionPlan: async function () {
    try {
      const plan = await AsyncStorage.getItem('plan');
      if (plan !== null) {
        console.log('plan saved data = ', plan);

        return plan;
      }
    } catch (e) {
      // error reading value
      console.log('error while reading plan value = ', e);
    }
    return null;
  },

  getIsProfileSetupDone: async function () {
    try {
      const setup = await AsyncStorage.getItem('profilesetup');
      if (setup !== '') {
        console.log('setup value fetched  = ', setup);

        return setup;
      }
    } catch (e) {
      // error reading value
      console.log('error while reading profilesetup value = ', e);
    }
    return null;
  },
};

export default FetchSavedDetails;
