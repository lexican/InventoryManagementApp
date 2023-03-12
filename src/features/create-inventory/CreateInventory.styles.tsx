import styled from 'styled-components/native';

export const CreateInventorySafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const CreateInventoryScrollView = styled.ScrollView`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const HeaderBackBtn = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: #aa77ff;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border-radius: 12px;
`;

export const HeaderBackBtnText = styled.Text`
  font-size: 24px;
  color: #ffffff;
`;

export const CreateInventoryText = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

export const CreateInventoryBtn = styled.TouchableOpacity`
  background: #aa77ff;
  width: 100%;
  border-radius: 12px;
  padding: 12px 20px;
  margin-top: 20px;
`;

export const CreateInventoryBtnText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const DeleteInventoryBtn = styled.TouchableOpacity`
  background: #ffffff;
  width: 100%;
  border-radius: 12px;
  padding: 12px 20px;
  margin-top: 40px;
  border-width: 1px;
  border-color: #aa77ff;
`;

export const DeleteInventoryBtnText = styled.Text`
  color: #aa77ff;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const CreateInventoryErrorText = styled.Text`
  color: red;
  margin-bottom: 20px;
`;
