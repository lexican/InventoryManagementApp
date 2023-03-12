import React, {useState} from 'react';
import CustomTextInput from '../../components/custom-text-input/CustomTextInput';
import {
  LoginBtn,
  LoginBtnText,
  LoginContainer,
} from './Login.styles';

const Login = () => {
  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {};

  return (
    <LoginContainer>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={email => {
          setEmail(email);
        }}
      />
      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={password => {
          setPassword(password);
        }}
      />
      <LoginBtn activeOpacity={0.9} onPress={handleLogin}>
        <LoginBtnText>Login</LoginBtnText>
      </LoginBtn>
    </LoginContainer>
  );
};

export default Login;
