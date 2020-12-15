import React, { useEffect } from 'react';
import Routes from './components/routes';
import './App.css';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import { defaultLocale, dynamicActivate } from './i18n';
import AuthProvider from './components/auth/context';
import HeaderBar from './components/header-bar';

function App() {
  useEffect(() => {
    dynamicActivate(defaultLocale)
  }, [])
  return (
    <I18nProvider i18n={i18n}>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <HeaderBar />
          </header>
          <Routes />
        </div>
      </AuthProvider>
    </I18nProvider>
  );
}

export default App;
