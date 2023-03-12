import styled from 'styled-components/native';

export const InventoryItemContainer = styled.View`
  height: 110px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  background: #ffffff;
  border-color: #f2f4f7;
  border-width: 1px;
  border-radius: 12px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 12px;
`;

export const InventoryName = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
  color: #131316;
  font-weight: 700;
`;

export const InventoryPrice = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
  color: #3a3a44;
`;

export const InventoryTotalStock = styled.Text`
  font-size: 14px;
  color: #3a3a44;
`;

export const EditInventoryBtn = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const EditInventoryBtnText = styled.Text`
  font-size: 14px;
  color: #aa77ff;
`;
