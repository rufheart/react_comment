import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { useContext } from 'react';
import { Context } from './Context';

function Yuxari(){
    let {user} = useContext(Context)
    console.log(user,'Header')
    return(
        <div className="header">
            <ul>
                <li>
                    <h1>                    
                        <Link to={'/'}>
                            <span>Ten</span>
                            <span>Plus</span>
                        </Link>
                    </h1>
                </li>
                <li>
                    <Link to={'/'}>Home</Link>               
                </li>
                {user?null:            
                    <>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link to={'/register'}>Register</Link>
                        </li>                
                    </>
                }
            </ul>
        </div>
    )
}

export default Yuxari;