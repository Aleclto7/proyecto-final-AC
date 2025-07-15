import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './functions/CartContext.jsx'
import { AuthProvider } from './functions/UseAuthUtils.jsx'
import { FavoriteProvider } from './functions/useFavorites.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
  </StrictMode>,
)
