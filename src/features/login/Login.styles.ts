import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  display: flex;
  flex: 1;
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const LoginBtn = styled.TouchableOpacity`
  background: #aa77ff;
  width: 100%;
  border-radius: 12px;
  padding: 12px 20px;
  margin-top: 20px;
`;

export const LoginBtnText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;
