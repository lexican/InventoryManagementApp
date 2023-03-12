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

const InventoryItem: FC<IProps> = ({inventory}) => {
  return (
    <InventoryItemContainer>
      <InventoryName>{inventory.name}</InventoryName>
      <InventoryPrice>#{inventory.price}</InventoryPrice>
      <InventoryTotalStock>{inventory.totalStock}</InventoryTotalStock>
      <EditInventoryBtn testID="edit" activeOpacity={0.9}>
        <EditInventoryBtnText>Edit</EditInventoryBtnText>
      </EditInventoryBtn>
    </InventoryItemContainer>
  );
};

export default InventoryItem;
