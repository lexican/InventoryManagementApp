import React from 'react';
import InventoryList from '../../components/inventory-list/InventoryList';
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
      <InventoryList />
    </HomeContainer>
  );
};

export default Home;
