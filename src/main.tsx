import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import i18next from 'i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({resources: {
      en: {
        translation: {
          "welcome": "Welcome"
        }
      },
      es: {
        translation: {
          "welcome": "Bienvenidos"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
