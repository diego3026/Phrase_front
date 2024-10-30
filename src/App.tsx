import { BrowserRouter } from "react-router-dom";
import Routes from './routes/Routes'
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <>
      <ApiProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApiProvider>
    </>
  )
}

export default App
