import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const ModalText = styled.Text`
  color: #000000;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ConfirmBtn = styled.TouchableOpacity`
  background: #aa77ff;
  width: 40%;
  border-radius: 12px;
  padding: 12px 20px;
`;

export const ConfirmBtnText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const RejectBtn = styled.TouchableOpacity`
  background: #ffffff;
  width: 40%;
  border-radius: 12px;
  padding: 12px 20px;
  border-width: 1px;
  border-color: #aa77ff;
  margin-left: 20px;
`;

export const RejectBtnText = styled.Text`
  color: #aa77ff;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;
