import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';


import Signin from './screens/Dashboard/Signin';
import Signup from './screens/Dashboard/Signup';
import SplashScreen from './screens/Dashboard/SplashScreen';
import Verification from './screens/Dashboard/Home';
// import Notifications from './screens/Dashboard/Notifications';
import internetConnectionHandler from './components/internetConnectionHandler';
import ProfileScreen from './screens/Dashboard/Profile';
import Home from './screens/Dashboard/Home';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName={'SplashScreen'}>

        
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default internetConnectionHandler(Router);
