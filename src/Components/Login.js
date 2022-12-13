import './Login.css'
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Qeydiyyat from './Register';
import { useContext } from 'react';
import { Context } from './Context';
import { Navigate } from 'react-router-dom';

function Giris(){
    console.log('login isledi')
    let [username, setUsername] = useState()
    let [password, setPassword] = useState()
    let {user, setUser} = useContext(Context)
    let {photo, setPhoto} = useContext(Context)
    let {id, setId} = useContext(Context)
    let {access,SetAccess} = useContext(Context)


    function writename(e){
        setUsername(e.target.value)
    }

    function writepass(e){
        setPassword(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        let istifadeci = {username,password}
        fetch('http://127.0.0.1:8000/account/token/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            // credentials:'include',
            body:JSON.stringify(istifadeci)
            },
            // console.log(data.json)
        ).then(data => data.json()).then(js => {
            localStorage.setItem('access', js.access);
            localStorage.setItem('refresh', js.refresh)
            localStorage.setItem('username',js.username)
            // localStorage.setItem('photo', js.image)
            // localStorage.setItem('id',js.id)
            setUser(js.username)
            setPhoto(js.image)
            setId(js.id)
            SetAccess(js.access)
            console.log(js.image,'lohin image')
        })
    }
    if(user){
        console.log('if user isledi')
        return <Navigate to='/' />
    }


    return(
        <div className='formdiv'>
            <form className='form' onsubmit={onSubmit}>
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
                    <input type="submit" onClick={onSubmit}/>
                </div>
                <div>
                    <Link to={'/register'}>Go to Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Giris;