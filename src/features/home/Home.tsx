import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import InventoryList from '../../components/inventory-list/InventoryList';
import {RootStackParamList} from '../../navigation/navigation';
import {
  AddInventoryBtn,
  AddInventoryBtnText,
  FlexRow,
  HomeContainer,
} from './Home.styles';

type Prop = NativeStackScreenProps<RootStackParamList, 'CreateInventory'>;

const Home = ({navigation}: Prop) => {
  const navigateToCreateInventory = () => {
    navigation.navigate('CreateInventory', {inventoryItem: {}});
  };

  return (
    <HomeContainer>
      <FlexRow>
        <AddInventoryBtn
          activeOpacity={0.9}
          onPress={navigateToCreateInventory}>
          <AddInventoryBtnText>Create</AddInventoryBtnText>
        </AddInventoryBtn>
      </FlexRow>
      <InventoryList />
    </HomeContainer>
  );
};

export default Home;
