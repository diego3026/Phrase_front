import { createContext, ReactNode, useContext, useState } from 'react';
import apiService from '../apiService/apiService';

interface ApiContextType {
  data: any;
  loading: boolean;
  error: string | null;
  crearFrase: (data: any) => Promise<void>;
  obtenerFrase: () => Promise<void>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const crearFrase = async (data: any) => {
    const path = "/phrases";
    setLoading(true);
    try {
      const response = await apiService.postData(path, data);

      if (response.data) {
        setLoading(false);
        setData(response.data);
      } else {
        setLoading(true);
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(true);
    }
  };

  const obtenerFrase = async () => {
    setLoading(true);
    const path = "/phrases/random";
    try {
      const response = await apiService.getData(path);
      if (response.data) {
        setLoading(false);
        setData(response.data);
      } else {
        setLoading(true);
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(true);
    }
  };

  return (
    <ApiContext.Provider value={{ data, loading, error, crearFrase, obtenerFrase }}>
      {children}
    </ApiContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi debe usarse dentro de un ApiProvider");
  }
  return context;
};
