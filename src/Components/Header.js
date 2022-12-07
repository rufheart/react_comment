import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Yuxari(){

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
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/register'}>Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default Yuxari;