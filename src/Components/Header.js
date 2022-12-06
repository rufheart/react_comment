import React from "react";
import { Link } from "react-router-dom";

function Yuxari(){

    return(
        <div>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>               
                </li>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Yuxari;