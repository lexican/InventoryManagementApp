import {FlatList} from 'react-native';
import React from 'react';
import {IInventory} from '../../types/types';
import InventoryItem from '../inventory-item/InventoryItem';

const InventoryList = () => {
  const data = [
    {name: 'name', description: '', price: 200, totalStock: 2},
    {name: 'name1', description: '', price: 200, totalStock: 2},
  ];
  return (
    <FlatList<IInventory>
      numColumns={1}
      data={data}
      renderItem={({item, index}: {item: IInventory; index: number}) => (
        <InventoryItem inventory={item} />
      )}
      keyExtractor={item => item.name}
      ListFooterComponentStyle={{marginTop: 20, marginBottom: 20}}
    />
  );
};

export default InventoryList;
