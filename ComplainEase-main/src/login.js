import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { auth } from './firebase.js';
import logo from './media/login-icon-3048.png';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const a = getAuth();
    //to set data for only current session
    // setPersistence(auth, browserSessionPersistence)
    //     .then(() => {
    //         alert("Login is must to add your complain.");
    //     })
    //     .catch((error) => {
    //     });
   
    const handleClick = (e) => {
        e.preventDefault();
        setSubmitted(true);
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(async (res) => {
                alert("logged in successfully.")
                navigate('/add');
            }).catch((err) => {
                setError(err.message);
                setSubmitted(false);
            })
    };

    return (
        <div className="login">
            {/* 1st div */}
            <div id="logo"><img src={logo} alt='' /></div>

            {/* 2nd div */}
            <div className='login_body'>
                <div className="form_login">
                    <form className="form" onSubmit={handleClick}>
                        <h3>Email:</h3>
                        <input type="text"
                            value={user.email}
                            required
                            onChange={(e) =>
                                setUser((u) => ({ ...u, email: e.target.value }))
                            }
                        />
                        <h3>Password:</h3>
                        <input type="text"
                            value={user.password}
                            required
                            onChange={(e) =>
                                setUser((u) => ({ ...u, password: e.target.value }))
                            }
                        />
                        <button className='login_button' onClick={handleClick} disabled={submitted}>Login</button>
                    </form>
                </div>
            </div>
            {/* 3rd div */}
            <div className="No_account">

                {error && alert(`${error.message}`)}
                <br />
                <p>Don't have an account?</p><Link to="/signup">Sign up</Link>
                <br />
            </div>
        </div>
    );

}

export default Login;
