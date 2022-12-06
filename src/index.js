import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider, { Context } from './Components/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Yuxari from './Components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider>
      <Yuxari/>
        <Routes>
          <Route path='/' element={<App/>}/>
        </Routes>
    </Provider>
  </BrowserRouter>
);


