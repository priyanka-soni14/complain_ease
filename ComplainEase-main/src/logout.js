import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { auth } from './firebase.js';
import { getAuth, signOut } from "firebase/auth";
//just a dummy file not in working
const Logout = () => {
    // const { logout } = useAuth();
    const navigate = useNavigate();
    const auth = getAuth();
    const handleClick = async () => {
        try {
            await signOut(auth);
            alert("Logged Out.");
            console.log("signed out");
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="logout">
            <div className='message'><h2>Thank for visiting our website.</h2></div>
            <button className='logout_button' onClick={handleClick} >Logout</button>
            </div>
    );

}

export default Logout;
