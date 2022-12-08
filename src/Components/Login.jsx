import './Login.css'
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Qeydiyyat from './Register';
import { useContext } from 'react';
import { Context } from './Context';

function Giris(){
    let [username, setUsername] = useState()
    let [password, setPassword] = useState()
    let {setUser} = useContext(Context)

    function writename(e){
        setUsername(e.target.value)
    }
    function writepass(e){
        setPassword(e.target.value)
    }
    function onsubmit(e){
        e.preventDefault()
        console.log(username,password)
        let user = {username,password}
        fetch('http://127.0.0.1:8000/account/token/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify(user)
            },
            // console.log(data.json)
        ).then(data => data.json()).then(js => {
            localStorage.setItem('access', js.access);
            localStorage.setItem('refresh', js.refresh)
            setUser(js.username)
        })

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