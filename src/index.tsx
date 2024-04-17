import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
// @ts-expect-error TS(6142): Module './App' was resolved to 'C:/Users/MEIP-user... Remove this comment to see the full error message
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
//basename={import.meta.env.DEV ? "/" : "/bester/"}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);

