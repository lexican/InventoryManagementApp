import {FlatList} from 'react-native';
import React from 'react';
import {IInventory} from '../../types/types';
import InventoryItem from '../inventory-item/InventoryItem';
import {useInventoryStateContext} from '../../contexts/inventory-context/InventoryContext';
import {
  EmptyStateContainer,
  EmptyStateSubText,
  EmptyStateText,
} from './Inventory.styles';

const InventoryList = () => {
  const {inventories} = useInventoryStateContext();
  if (inventories.length == 0) {
    return (
      <EmptyStateContainer>
        <EmptyStateText>Inventory is Empty</EmptyStateText>
        <EmptyStateSubText>
          Add an Inventory by clicking on the create button above
        </EmptyStateSubText>
      </EmptyStateContainer>
    );
  }
  return (
    <FlatList<IInventory>
      numColumns={1}
      data={inventories}
      renderItem={({item, index}: {item: IInventory; index: number}) => (
        <InventoryItem inventory={item} />
      )}
      keyExtractor={item => item.name}
    />
  );
};

export default InventoryList;
