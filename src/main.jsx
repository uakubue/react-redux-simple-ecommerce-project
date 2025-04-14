import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './store.jsx'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <App />
        {/* <PersistGate loading={true} persistor={persistor}>
          
        </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
