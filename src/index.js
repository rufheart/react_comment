import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider, { Context } from './Components/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Yuxari from './Components/Header';
import Giris from './Components/Login';
import Qeydiyyat from './Components/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider>
      <Yuxari/>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/login' element={<Giris/>}/>
          <Route path='/register' element={<Qeydiyyat/>}/>
        </Routes>
    </Provider>
  </BrowserRouter>
);


