import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Import Cursor Provider
import CursorProvider from './context/CursorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorProvider>
);

