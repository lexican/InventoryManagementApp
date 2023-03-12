import React, {useState} from 'react';
import CustomTextInput from '../../components/custom-text-input/CustomTextInput';
import {useAuthStateContext} from '../../contexts/auth-context/AuthContext';
import {validateEmail} from '../../utils/utils';
import {
  LoginBtn,
  LoginBtnText,
  LoginContainer,
  LoginErrorText,
} from './Login.styles';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const {onLogin} = useAuthStateContext();

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');
    if (email === '') {
      setEmailError('Email is Required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid Email');
    } else if (password === '') {
      setPasswordError('Password is Required');
    } else {
      onLogin(email);
    }
  };

  return (
    <LoginContainer>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={email => {
          setEmail(email);
        }}
      />
      {emailError && <LoginErrorText>{emailError}</LoginErrorText>}
      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={password => {
          setPassword(password);
        }}
      />
      {passwordError && <LoginErrorText>{passwordError}</LoginErrorText>}
      <LoginBtn activeOpacity={0.9} onPress={handleLogin}>
        <LoginBtnText>Login</LoginBtnText>
      </LoginBtn>
    </LoginContainer>
  );
};

export default Login;
