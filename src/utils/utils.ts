import Toast from "react-native-toast-message";

export const validateEmail = (email: string): Boolean => {
  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return reg.test(email);
};

export const showToast = (message: string, type = 'info') => {
  Toast.show({
    type: type,
    text1: message,
  });
};
