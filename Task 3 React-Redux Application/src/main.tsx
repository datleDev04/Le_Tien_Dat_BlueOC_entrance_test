import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './service/store.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Provider store={store} >
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
