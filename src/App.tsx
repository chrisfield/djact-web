import React from 'react';
import Routes from './components/routes';
import './App.css';
import AuthProvider from './components/auth/context';
import HeaderBar from './components/header-bar';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <HeaderBar />
        </header>
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
