export const validateEmail = (email: string): Boolean => {
  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return reg.test(email);
};
