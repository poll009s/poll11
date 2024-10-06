import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './component/Layou';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Layout>
 
);
