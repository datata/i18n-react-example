import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './App.css'

function App() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const selectLanguageHandler = (e: any) => {
    const selectedLanguage = e.target.value
    setSelectedLanguage(selectedLanguage);

    i18n.changeLanguage(selectedLanguage)
  }

  return (
    <>
      <div>
        <header>
          <select onChange={selectLanguageHandler} name="Select Language" id="" value={selectedLanguage}>
            <option value="Select Language">Select Language</option>
            <option value="es">Es</option>
            <option value="en">En</option>
          </select>
        </header>
        <h1>{t('welcome')}</h1>
      </div>
    </>
  )
}

export default App
