import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {IInventory} from '../../types/types';
import {
  EditInventoryBtn,
  EditInventoryBtnText,
  InventoryItemContainer,
  InventoryName,
  InventoryPrice,
  InventoryTotalStock,
} from './InventoryItem.styles';

type IProps = {
  inventory: IInventory;
};

type Nav = {
  navigate: (value: string, data: any) => void;
};

const InventoryItem: FC<IProps> = ({inventory}) => {
  const {navigate} = useNavigation<Nav>();
  return (
    <InventoryItemContainer>
      <InventoryName>{inventory.name}</InventoryName>
      <InventoryPrice>#{inventory.price}</InventoryPrice>
      <InventoryTotalStock>{inventory.totalStock}</InventoryTotalStock>
      <EditInventoryBtn
        testID="edit"
        activeOpacity={0.9}
        onPress={() => {
          navigate('CreateInventory', {
            inventoryItem: inventory,
          });
        }}>
        <EditInventoryBtnText>Edit</EditInventoryBtnText>
      </EditInventoryBtn>
    </InventoryItemContainer>
  );
};

export default InventoryItem;
