import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
 
    <ChakraProvider>
    <App />
    </ChakraProvider>
  
)
export const server = `https://api.coingecko.com/api/v3`;
