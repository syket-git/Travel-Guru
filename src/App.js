import React from 'react';
import Routes from './routes';
import './App.css';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={5}>
        <Routes />
      </SnackbarProvider>
    </div>
  );
}

export default App;
