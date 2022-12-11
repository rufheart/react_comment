import React from "react";
import App from "./App";
import Yuxari from "./Components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Giris from './Components/Login';
import Qeydiyyat from './Components/Register';
import Cixis from "./Components/Logout";
import { useContext } from "react";
import { Context } from "./Components/Context";

function Afterapp(){
    let {user} = useContext(Context)
    console.log(user,'after')
    return(
        <>
            <Yuxari/>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/login' element={<Giris/>}/>
                    <Route path='/register' element={<Qeydiyyat/>}/>
                    <Route path='/logout' element={<Cixis/>}/>
                </Routes>        
        </>
    )
}

export default Afterapp;