import React, {useEffect} from 'react';
import {SplashContainer, SplashTitle} from './Splash.styles';

type IProps = {};

export default function Splash({}: IProps): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      //Navigate to home or Login after 3 seconds
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <SplashContainer>
      <SplashTitle>Inventory</SplashTitle>
    </SplashContainer>
  );
}
