import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/style.scss"
import 'remixicon/fonts/remixicon.css'
import { QueryProvider } from './Providers/QueryProviders.jsx'
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryProvider>
      <Toaster richColors/>
      <App />
    </QueryProvider>
  </StrictMode>,
)
