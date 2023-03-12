import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../features/splash/Splash';
import Login from '../features/login/Login';
import Home from '../features/home/Home';
import {useAuthStateContext} from '../contexts/auth-context/AuthContext';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const {isLoading, isLoggedIn} = useAuthStateContext();

  if (isLoading) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} options={{title: ''}} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{title: ''}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{title: ''}}
            />
          </Stack.Group>
        )}
        <Stack.Group></Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
