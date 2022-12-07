import './Login.css'
import React from "react";
import { Link } from "react-router-dom";
import Qeydiyyat from './Register';

function Giris(){
    return(
        <div className='formdiv'>
            <form className='form'>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text"  id='password'/>
                </div>
                <div>
                    <Link to={'/register'}>Go to Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Giris;