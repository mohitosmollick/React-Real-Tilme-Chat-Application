import React from "react";
import { FcAddImage } from 'react-icons/fc';
import { Link } from "react-router-dom";

const Register = () =>{
    return(
        <div className="fromContainer">
            <div className="formWrapper">
                <span className="logo">Live Chat</span>
                <div className="title">Register</div>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="eamil" />
                    <input type="password" placeholder="password" />
                    <input style={{display:'none'}} type="file" id="file" />
                    <label htmlFor="file"> <FcAddImage className="icon"/> 
                    <span>Add to Avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Do you have any account? <Link to='/login'>Login</Link> </p>
            </div>
        </div>
    )
}
export default Register;