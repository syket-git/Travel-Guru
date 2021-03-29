import React from 'react';
import Routes from './routes';
import './App.css';
import SnackbarProvider from 'react-simple-snackbar';
function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <Routes />
      </SnackbarProvider>
    </div>
  );
}

export default App;
