import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalProvider from './context/GlobalContext'
import MainPage from './Pages/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <MainPage />
    </GlobalProvider>
  </React.StrictMode>
)
