import styled from 'styled-components/native';

export const HomeContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0px 20px 10px 0px;
`;

export const AddInventoryBtn = styled.TouchableOpacity`
  background: #aa77ff;
  border-radius: 12px;
  padding: 12px 15px;
  margin-top: 20px;
  width: 100px;
`;

export const AddInventoryBtnText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const LogoutButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const LogoutBtn = styled.TouchableOpacity`
  background: #ffffff;
  width: 80%;
  border-radius: 12px;
  padding: 12px 20px;
  margin-top: 20px;
  border-width: 1px;
  border-color: #aa77ff;
`;

export const LogoutBtnText = styled.Text`
  color: #aa77ff;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;
