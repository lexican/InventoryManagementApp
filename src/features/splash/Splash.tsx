import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../../navigation/navigation';
import {SplashContainer, SplashTitle} from './Splash.styles';

type Prop = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Splash({navigation}: Prop): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <SplashContainer>
      <SplashTitle>Inventory</SplashTitle>
    </SplashContainer>
  );
}
