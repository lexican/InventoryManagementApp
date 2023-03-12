import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IInventory} from '../../types/types';

export const InventoryStateContext = createContext<IStateContext>(
  undefined as never,
);

type IStateContext = {
  inventories: IInventory[];
  addInventory: (inventory: IInventory) => void;
  updateInventory: (inventory: IInventory, name: string) => void;
  deleteInventory: (name: string) => void;
  clearInventories: () => void;
};

type IProp = {
  children: JSX.Element;
};

export const InventoryContextProvider: FC<IProp> = ({children}) => {
  const [inventories, setInventories] = useState<IInventory[]>([]);

  useEffect(() => {
    getInventories();
  }, []);

  const getInventories = async () => {
    const inventoryItems = await AsyncStorage.getItem('items');
    if (inventoryItems != null) {
      setInventories(JSON.parse(inventoryItems));
    }
  };

  const addInventory = async (inventory: IInventory) => {
    setInventories([...inventories, inventory]);
    await AsyncStorage.setItem(
      'items',
      JSON.stringify([...inventories, inventory]),
    );
  };

  const updateInventory = async (inventory: IInventory, name: string) => {
    const tempInventories = [...inventories];

    const inventoryIndex = tempInventories.findIndex(
      inventoryItem => inventoryItem.name.toLowerCase() === name.toLowerCase(),
    );

    if (inventoryIndex !== -1) {
      tempInventories[inventoryIndex] = {...inventory};
      await AsyncStorage.setItem('items', JSON.stringify(tempInventories));
      setInventories([...tempInventories]);
    }
  };

  const deleteInventory = async (name: string) => {
    const tempInventories = inventories.filter(
      inventory => inventory.name.toLowerCase() !== name.toLowerCase(),
    );
    await AsyncStorage.setItem('items', JSON.stringify(tempInventories));
    setInventories([...tempInventories]);
  };

  const clearInventories = async () => {
    await AsyncStorage.removeItem('items');
    setInventories([]);
  };

  const value = useMemo(
    () => ({
      inventories,
      addInventory,
      updateInventory,
      deleteInventory,
      clearInventories,
    }),
    [
      inventories,
      addInventory,
      updateInventory,
      deleteInventory,
      clearInventories,
    ],
  );

  return (
    <InventoryStateContext.Provider value={value}>
      {children}
    </InventoryStateContext.Provider>
  );
};

export function useInventoryStateContext(): IStateContext {
  return useContext(InventoryStateContext);
}
