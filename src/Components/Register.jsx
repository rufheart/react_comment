import { Link } from "react-router-dom";
import React, {useState} from "react";
import './Register.css'
function Qeydiyyat(){
    let [username, setUser] = useState()
    let [password, setPass] = useState()
    let [repassword, setRepass] = useState()


    function writeuser(e){
        setUser(e.target.value)
    }
    function writepass(e){
        setPass(e.target.value)
    }
    function writerepass(e){
        setRepass(e.target.value)
    }

 
    async function onSubmit(e){
        e.preventDefault()
        console.log(username,password)
        let data = {username,password}
        const response = await fetch('http://127.0.0.1:8000/account/register/',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            }
        )
    }


    return(
        <div className='formdiv'>
            <form className='form' onSubmit={onSubmit}>
                <div>
                    <h1>Register</h1>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={writeuser} value={username}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text"  id='password' onChange={writepass} value={password}/>
                </div>
                <div>
                    {/* <label htmlFor="re-password">Confirm Password</label>
                    <input type="text"  id='re-password' onChange={writerepass} value={repassword}/> */}
                </div>
                <div>
                    <input type="submit" onClick={onSubmit}/>
                </div>
                <div>
                    <Link to={'/login'}>If you have account, Go</Link>
                </div>
            </form>
        </div>
    )    
}

export default Qeydiyyat;