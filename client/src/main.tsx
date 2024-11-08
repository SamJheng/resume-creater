import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router';
import { I18nextProvider } from 'react-i18next';
import i18n from "i18next";
import initI18n from './i18n';
import { LanguageProvider } from './provider/language-provide';

// import App from './App.tsx'
initI18n();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </I18nextProvider>
  </StrictMode>,
)
