// apiService.js
import axios from 'axios';


// http://localhost:8080 desarrollo

// Configura la instancia de Axios
const api = axios.create({
  baseURL: 'https://mensaje-api.azurewebsites.net',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar respuestas o errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {

    // Manejo de errores globales (como errores de autenticación)
    if (error.response) {
      // Manejo de errores globales (como errores de autenticación)
      console.error("No autorizado, redireccionando al login...");
    }else{
      console.error(error);
    }
    return Promise.reject(error);
  }
);


const apiService = {
  getData: (endpoint: string) => api.get(endpoint),
  postData: (endpoint: string, data: any) => api.post(endpoint, data),
  putData: (endpoint: string, data: any) => api.put(endpoint, data),
  deleteData: (endpoint: string) => api.delete(endpoint),
};

export default apiService;
