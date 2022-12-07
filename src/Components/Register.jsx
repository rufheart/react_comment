import { Link } from "react-router-dom";
import './Register.css'
function Qeydiyyat(){
    return(
        <div className='formdiv'>
            <form className='form'>
                <div>
                    <h1>Register</h1>
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
                    <label htmlFor="re-password">Confirm Password</label>
                    <input type="text"  id='re-password'/>
                </div>
                <div>
                    <Link to={'/login'}>If you already have account go to</Link>
                </div>
            </form>
        </div>
    )    
}

export default Qeydiyyat;