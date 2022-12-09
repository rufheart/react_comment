import React from "react";
import App from "./App";
import Yuxari from "./Components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Giris from './Components/Login';
import Qeydiyyat from './Components/Register';
import { useContext } from "react";
import { Context } from "./Components/Context";

function Afterapp(){
    let {user} = useContext(Context)
    return(
        <>
            <Yuxari/>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    {user?<Route path='/logut' />:
                    <>
                        <Route path='/login' element={<Giris/>}/>
                        <Route path='/register' element={<Qeydiyyat/>}/>
                    </>
                    }
                </Routes>        
        </>
    )
}

export default Afterapp;