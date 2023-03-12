import React from 'react';
import {AuthContextProvider} from './src/contexts/auth-context/AuthContext';

import Navigation from './src/navigation/navigation';

const App = (): JSX.Element => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};
export default App;
