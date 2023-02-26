import React, { useState } from "react";
import { FcAddImage } from 'react-icons/fc';
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage} from '../firebase';

import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const Register = () =>{
    const [err, setError] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        
    try{
    const res = await createUserWithEmailAndPassword(auth, email, password)  
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed', 
  (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {

  }, 
  () => {
  
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
    })
    });
  }
);
    }catch(err){
        setError(true)
    }

  
}
    return(
        <div className="fromContainer">
            <div className="formWrapper">
                <span className="logo">Live Chat</span>
                <div className="title">Register</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="eamil" />
                    <input type="password" placeholder="password" />
                    <input style={{display:'none'}} type="file" id="file" />
                    <label htmlFor="file"> <FcAddImage className="icon"/> 
                    <span>Add to Avatar</span>
                    </label>
                    <button>Sign Up</button>

                    {err && <span>Something wrong!</span>}
                </form>
                <p>Do you have any account? <Link to='/login'>Login</Link> </p>
            </div>
        </div>
    )
}
export default Register;