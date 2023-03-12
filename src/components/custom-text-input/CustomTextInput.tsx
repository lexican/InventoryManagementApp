import React from 'react';
import {KeyboardTypeOptions} from 'react-native/types';
import {TextInputField} from './CustomTextInput.styles';

type IProps = {
  secureTextEntry?: boolean;
  placeholder?: string;
  value?: string;
  keyboard?: KeyboardTypeOptions | undefined;
  onChangeText?: (text: string) => void;
};

const CustomTextInput = ({
  secureTextEntry = false,
  placeholder,
  value,
  onChangeText,
  keyboard = 'default',
}: IProps) => {
  return (
    <TextInputField
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboard}
    />
  );
};

export default CustomTextInput;
