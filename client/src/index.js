import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
//import LanguageSelect from "./components/LanguageSelect";
import reportWebVitals from './reportWebVitals';

import './i18n';
import { LanguageContextProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <LanguageContextProvider>
  {/*  <LanguageSelect/>*/}
      <App />
    </LanguageContextProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
