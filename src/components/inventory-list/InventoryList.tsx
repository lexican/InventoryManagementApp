import {FlatList} from 'react-native';
import React from 'react';
import {IInventory} from '../../types/types';
import InventoryItem from '../inventory-item/InventoryItem';
import {useInventoryStateContext} from '../../contexts/inventory-context/InventoryContext';

const InventoryList = () => {
  const {inventories} = useInventoryStateContext();
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
