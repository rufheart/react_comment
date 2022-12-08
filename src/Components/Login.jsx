import './Login.css'
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Qeydiyyat from './Register';

function Giris(){
    let [username, setUsername] = useState()
    let [password, setPassword] = useState()
    function writename(e){
        setUsername(e.target.value)
    }
    function writepass(e){
        setPassword(e.target.value)
    }
    async function onsubmit(e){
        e.preventDefault()
        console.log(username,password)
        let data = {username,password}
        const response = await fetch('http://127.0.0.1:8000/account/token/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            }
        )
    }
    return(
        <div className='formdiv'>
            <form className='form' onsubmit={onsubmit}>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={writename} value={username}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' onChange={writepass} value={password}/>
                </div>
                <div>
                    <input type="submit" onClick={onsubmit}/>
                </div>
                <div>
                    <Link to={'/register'}>Go to Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Giris;