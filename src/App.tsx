import React from 'react';
import Routes from './components/routes';
import './App.css';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import AuthProvider from './components/auth/context';
import HeaderBar from './components/header-bar';
import { messages } from './locales/en/messages.js';
// import { messages } from './locales/fr/messages.js';


i18n.load('fr', messages);
i18n.activate('en');
// i18n.activate('fr');

function App() {
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
