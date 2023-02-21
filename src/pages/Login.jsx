import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="fromContainer">
            <div className="formWrapper">
                <span className="logo">Live Chat</span>
                <div className="title">Register</div>
                <form>
                    <input type="email" placeholder="eamil" />
                    <input type="password" placeholder="password" />
                    
                    <button>Login</button>
                </form>
                <p>Do you have any account? <Link to='/register'>Register</Link> </p>
            </div>
        </div>
    )
}
export default Login;