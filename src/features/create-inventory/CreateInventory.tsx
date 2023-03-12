import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import CustomTextInput from '../../components/custom-text-input/CustomTextInput';
import {useInventoryStateContext} from '../../contexts/inventory-context/InventoryContext';
import {showToast} from '../../utils/utils';
import {
  CreateInventoryBtn,
  CreateInventoryBtnText,
  CreateInventoryErrorText,
  CreateInventorySafeAreaView,
  CreateInventoryScrollView,
  CreateInventoryText,
  DeleteInventoryBtn,
  DeleteInventoryBtnText,
  HeaderBackBtn,
  HeaderBackBtnText,
  HeaderRow,
} from './CreateInventory.styles';

type IProp = {
  route: any;
  navigation: any;
};

type ParamList = {
  CreateInventory: {
    inventoryItem: any;
  };
};

const CreateInventory: FC<IProp> = ({navigation}) => {
  const [isDeleteInventoryModalVisible, setDeleteInventoryModalVisible] =
    useState<boolean>(false);
  const route = useRoute<RouteProp<ParamList, 'CreateInventory'>>();
  const {inventoryItem: editInventoryItem} = route.params;
  const [inventoryName, setInventoryName] = useState<string>(
    editInventoryItem?.name ?? '',
  );
  const [inventoryTotalStock, setInventoryTotalStock] = useState<string>(
    editInventoryItem?.totalStock?.toString() ?? '',
  );
  const [inventoryPrice, setInventoryPrice] = useState<string>(
    editInventoryItem?.price?.toString() ?? '',
  );
  const [inventoryDescription, setInventoryDescription] = useState<string>(
    editInventoryItem?.description ?? '',
  );

  const [inventoryNameError, setInventoryNameError] = useState<string>('');
  const [inventoryTotalStockError, setInventoryTotalStockError] =
    useState<string>('');
  const [inventoryPriceError, setInventoryPriceError] = useState<string>('');
  const [inventoryDescriptionError, setInventoryDescriptionError] =
    useState<string>('');

  const {addInventory, inventories, updateInventory, deleteInventory} =
    useInventoryStateContext();

  const createInventory = () => {
    setInventoryNameError('');
    setInventoryTotalStockError('');
    setInventoryPriceError('');
    setInventoryDescriptionError('');
    if (inventoryName === '') {
      setInventoryNameError('Inventory Name is Required');
    } else if (inventoryTotalStock === '') {
      setInventoryTotalStockError('Inventory Stock is Required');
    } else if (inventoryPrice === '') {
      setInventoryPriceError('Inventory Price is Required');
    } else if (inventoryDescription === '') {
      setInventoryDescriptionError('Inventory Description is Required');
    } else if (inventoryDescription !== '' && inventoryDescription.length < 3) {
      setInventoryDescriptionError(
        'Inventory Description must be at least 3 characters',
      );
    } else {
      if (editInventoryItem?.name == null) {
        // Create New Inventory
        const inventory = inventories.find(
          inventoryItem =>
            inventoryItem.name.toLowerCase() === inventoryName.toLowerCase(),
        );
        if (inventory != null) {
          setInventoryNameError('Inventory Name already exist');
        } else {
          addInventory({
            name: inventoryName,
            description: inventoryDescription,
            price: Number(inventoryPrice),
            totalStock: Number(inventoryTotalStock),
          });
          setInventoryName('');
          setInventoryTotalStock('');
          setInventoryPrice('');
          setInventoryDescription('');
        }

        showToast('Inventory Created.');
      } else {
        //Update Inventory
        if (
          inventoryName.toLowerCase() ===
          editInventoryItem?.name.toLowerCase().toString()
        ) {
          updateInventory(
            {
              name: inventoryName,
              description: inventoryDescription,
              price: Number(inventoryPrice),
              totalStock: Number(inventoryTotalStock),
            },
            editInventoryItem?.name,
          );
          showToast('Inventory Updated');
        } else {
          const inventory = inventories.find(
            inventoryItem =>
              inventoryItem.name.toLowerCase() === inventoryName.toLowerCase(),
          );
          if (inventory != null) {
            setInventoryNameError('Inventory Name already exist');
          } else {
            updateInventory(
              {
                name: inventoryName,
                description: inventoryDescription,
                price: Number(inventoryPrice),
                totalStock: Number(inventoryTotalStock),
              },
              editInventoryItem?.name,
            );
            showToast(`Inventory Updated`);
          }
        }
      }
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <CreateInventorySafeAreaView>
      <CreateInventoryScrollView>
        <HeaderRow>
          <HeaderBackBtn onPress={goBack} activeOpacity={0.9}>
            <HeaderBackBtnText>&#60;</HeaderBackBtnText>
          </HeaderBackBtn>
          <CreateInventoryText>
            {editInventoryItem?.name == null ? 'Create' : 'Edit'} Inventory
          </CreateInventoryText>
        </HeaderRow>

        <CustomTextInput
          placeholder="Inventory Name"
          value={inventoryName}
          onChangeText={name => {
            setInventoryName(name);
          }}
        />
        {inventoryNameError && (
          <CreateInventoryErrorText>
            {inventoryNameError}
          </CreateInventoryErrorText>
        )}
        <CustomTextInput
          placeholder="Inventory Total Stock"
          value={inventoryTotalStock}
          onChangeText={totalStock => {
            setInventoryTotalStock(totalStock.replace(/[^0-9]/g, ''));
          }}
          keyboard="numeric"
        />
        {inventoryTotalStockError && (
          <CreateInventoryErrorText>
            {inventoryTotalStockError}
          </CreateInventoryErrorText>
        )}
        <CustomTextInput
          placeholder="Inventory Price"
          value={inventoryPrice}
          onChangeText={price => {
            setInventoryPrice(price);
          }}
          keyboard="numeric"
        />
        {inventoryPriceError && (
          <CreateInventoryErrorText>
            {inventoryPriceError}
          </CreateInventoryErrorText>
        )}
        <CustomTextInput
          placeholder="Inventory Description"
          value={inventoryDescription}
          onChangeText={description => {
            setInventoryDescription(description);
          }}
        />
        {inventoryDescriptionError && (
          <CreateInventoryErrorText>
            {inventoryDescriptionError}
          </CreateInventoryErrorText>
        )}
        <CreateInventoryBtn
          activeOpacity={0.9}
          onPress={() => {
            createInventory();
          }}>
          <CreateInventoryBtnText>
            {editInventoryItem?.name == null ? 'Create' : 'Edit'}
          </CreateInventoryBtnText>
        </CreateInventoryBtn>
        {editInventoryItem?.name != null && (
          <DeleteInventoryBtn
            activeOpacity={0.9}
            onPress={() => {
              setDeleteInventoryModalVisible(true);
            }}>
            <DeleteInventoryBtnText>Delete</DeleteInventoryBtnText>
          </DeleteInventoryBtn>
        )}
      </CreateInventoryScrollView>
    </CreateInventorySafeAreaView>
  );
};

export default CreateInventory;
