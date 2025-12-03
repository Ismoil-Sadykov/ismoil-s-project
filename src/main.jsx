import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/theme-provider'
import '../i18n'
import { I18nextProvider } from 'react-i18next'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <I18nextProvider >
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>,
)
