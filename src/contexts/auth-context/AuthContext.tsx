import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthStateContext = createContext<IStateContext>(
  undefined as never,
);

type IStateContext = {
  email?: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  onLogin: (email: string) => void;
  onLogout: () => void;
};

type IProp = {
  children: JSX.Element;
};

export const AuthContextProvider: FC<IProp> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = async () => {
    setIsLoading(true);
    const loggedIn = await AsyncStorage.getItem('isLoggedIn');
    const email = await AsyncStorage.getItem('email');
    if (loggedIn !== null) {
      setIsLoggedIn(true);
      setEmail(email ?? '');
    }
    setIsLoading(false);
  };

  const onLogin = async (email: string) => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('email', email);
    setIsLoggedIn(true);
    setEmail(email);
  };

  const onLogout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('email');
    setIsLoading(false);
    setIsLoggedIn(false);
  };

  const value = useMemo(
    () => ({email, isLoggedIn, onLogin, onLogout, isLoading}),
    [email, isLoggedIn, onLogin, onLogout, isLoading],
  );

  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
};

export function useAuthStateContext(): IStateContext {
  return useContext(AuthStateContext);
}
