import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataContextProvider } from './Config/DataContext.jsx'
import { CartProvider } from './Config/CartData.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import ScrollTop from './Components/ScrollTop.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <DataContextProvider>
    <CartProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
        <ScrollTop />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </ClerkProvider>
    </CartProvider>
  </DataContextProvider>
)
