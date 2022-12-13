import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context";

function Cixis(){ 
    let {user, setUser} = useContext(Context)
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    localStorage.removeItem('photo');
    // localStorage.removeItem('id');
    localStorage.removeItem('access')
    setUser()
    return(
        <Navigate to={'/'} />
    )
}



export default Cixis;