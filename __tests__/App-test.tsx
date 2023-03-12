/**
 * @format
 */

import 'react-native';
import React from 'react';

import {act, render, screen} from '@testing-library/react-native';
import Splash from '../src/features/splash/Splash';
import {InventoryContextProvider} from '../src/contexts/inventory-context/InventoryContext';
import Login from '../src/features/login/Login';
import {
  AuthContextProvider,
  AuthStateContext,
} from '../src/contexts/auth-context/AuthContext';
import Toast from 'react-native-toast-message';
import {ModalProps} from 'react-native';
import CreateInventory from '../src/features/create-inventory/CreateInventory';
import Home from '../src/features/home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InventoryItem from '../src/components/inventory-item/InventoryItem';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native/Libraries/Modal/Modal', () => {
  const Modal = jest.requireActual('react-native/Libraries/Modal/Modal');
  return (props: ModalProps) => <Modal {...props} />;
});

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    route: jest.fn(),
  },
  ...props,
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

describe('render screens correctly', () => {
  let props: any;
  beforeEach(() => {
    jest.useFakeTimers();
    props = createTestProps({});
  });

  test('should render splash screen correctly', () => {
    render(<Splash {...props} />);
    expect(screen).toMatchSnapshot();
  });

  it('should render login correctly', () => {
    render(
      <InventoryContextProvider>
        <AuthContextProvider>
          <>
            <Login {...props} />
          </>
        </AuthContextProvider>
      </InventoryContextProvider>,
    );
    expect(screen).toMatchSnapshot();
  });

  it('should render create inventory correctly', () => {
    render(
      <InventoryContextProvider>
        <AuthContextProvider>
          <>
            <CreateInventory {...props} />
          </>
        </AuthContextProvider>
      </InventoryContextProvider>,
    );
    expect(screen).toMatchSnapshot();
  });

  it('should render home correctly', () => {
    render(
      <InventoryContextProvider>
        <AuthContextProvider>
          <Home {...props} />
        </AuthContextProvider>
      </InventoryContextProvider>,
    );
    expect(screen).toMatchSnapshot();
  });
});

describe('edit screen on press test', () => {
  it('navigate to edit inventory on Edit button pressed', async () => {
    render(
      <AuthStateContext.Provider
        value={{
          isLoggedIn: true,
          isLoading: false,
          onLogin: jest.fn(),
          onLogout: jest.fn(),
        }}>
        <InventoryItem
          inventory={{
            name: '',
            price: 300,
            totalStock: 2,
            description: '',
          }}
        />
      </AuthStateContext.Provider>,
    );

    expect(screen).toMatchSnapshot();

    const btn = screen.root.findByProps({testID: 'edit'}).props;

    act(() => btn.onPress());
    expect(btn).toBeTruthy();

    console.log(btn);

    expect(mockedNavigate).toHaveBeenCalled();
  });
});

describe('Async storage CRUD test', () => {
  const mockData = [
    {
      name: 'Banger',
      price: 300,
      totalStock: 2,
      description: 'Not available',
    },
  ];
  beforeEach(() => {
    AsyncStorage.clear();
  });

  it('can read item in async storage', async () => {
    await AsyncStorage.setItem('email', 'test@gmail.com');
    let emailValue = await AsyncStorage.getItem('email');
    expect(emailValue).toBe('test@gmail.com');
  });

  it('can delete item in async storage', async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.removeItem('isLoggedIn');
    let isLoggedInValue = await AsyncStorage.getItem('isLoggedIn');
    expect(isLoggedInValue).toBe(null);
  });

  it('can update item in async storage', async () => {
    await AsyncStorage.setItem('items', JSON.stringify(mockData));

    let items = await AsyncStorage.getItem('items');

    if (items != null) {
      let tempList = JSON.parse(items);
      let tempItem = {...tempList[0]};
      tempItem.name = 'Stock';
      tempList[0] = tempItem;
      await AsyncStorage.setItem('items', JSON.stringify(tempList));
    }

    let newItems = await AsyncStorage.getItem('items');

    if (newItems != null) {
      let items = JSON.parse(newItems);
      expect(items[0].name).toBe('Stock');
    }
  });
});
