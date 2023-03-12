import React from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {AuthContextProvider} from './src/contexts/auth-context/AuthContext';
import {InventoryContextProvider} from './src/contexts/inventory-context/InventoryContext';

import Navigation from './src/navigation/navigation';

const App = (): JSX.Element => {
  return (
    <>
      <AuthContextProvider>
        <InventoryContextProvider>
          <Navigation />
        </InventoryContextProvider>
      </AuthContextProvider>
      <Toast />
    </>
  );
};
export default App;
