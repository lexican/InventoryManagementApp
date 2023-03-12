import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import ConfirmModal from '../../components/confirm-modal/ConfirmModal';
import InventoryList from '../../components/inventory-list/InventoryList';
import {useAuthStateContext} from '../../contexts/auth-context/AuthContext';
import {useInventoryStateContext} from '../../contexts/inventory-context/InventoryContext';
import {RootStackParamList} from '../../navigation/navigation';
import {
  AddInventoryBtn,
  AddInventoryBtnText,
  FlexRow,
  HomeContainer,
  LogoutBtn,
  LogoutBtnText,
  LogoutButtonContainer,
} from './Home.styles';

type Prop = NativeStackScreenProps<RootStackParamList, 'CreateInventory'>;

const Home = ({navigation}: Prop) => {
  const [isLogoutInventoryModalVisible, setLogoutInventoryModalVisible] =
    useState(false);
  const navigateToCreateInventory = () => {
    navigation.navigate('CreateInventory', {inventoryItem: {}});
  };

  const {onLogout} = useAuthStateContext();
  const {clearInventories} = useInventoryStateContext();

  const handleLogout = async () => {
    await clearInventories();
    await onLogout();
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
      <LogoutButtonContainer>
        <LogoutBtn
          activeOpacity={0.9}
          onPress={() => {
            setLogoutInventoryModalVisible(true);
          }}>
          <LogoutBtnText>Logout</LogoutBtnText>
        </LogoutBtn>
      </LogoutButtonContainer>
      <ConfirmModal
        isModalVisible={isLogoutInventoryModalVisible}
        title="Are you sure you want to logout?"
        onReject={() => {
          setLogoutInventoryModalVisible(false);
        }}
        onConfirm={handleLogout}
      />
    </HomeContainer>
  );
};

export default Home;
