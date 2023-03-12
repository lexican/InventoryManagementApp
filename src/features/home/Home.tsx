import React from 'react';
import InventoryItem from '../../components/inventory-item/InventoryItem';
import {
  AddInventoryBtn,
  AddInventoryBtnText,
  FlexRow,
  HomeContainer,
} from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <FlexRow>
        <AddInventoryBtn activeOpacity={0.9} onPress={() => {}}>
          <AddInventoryBtnText>Create</AddInventoryBtnText>
        </AddInventoryBtn>
      </FlexRow>
      <InventoryItem
        inventory={{name: 'name', description: '', price: 200, totalStock: 2}}
      />
    </HomeContainer>
  );
};

export default Home;
