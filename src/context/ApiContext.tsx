import { createContext, ReactNode, useContext, useState } from 'react';
import apiService from '../apiService/apiService';

interface ApiContextType {
  data: any;
  loading: boolean;
  error: string | null;
  fetchFrase: (path: string) => Promise<void>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined)

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFrase = async (path: string) => {
    setLoading(true);
    try {
      const response = await apiService.getData(path);
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ data, loading, error, fetchFrase }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};