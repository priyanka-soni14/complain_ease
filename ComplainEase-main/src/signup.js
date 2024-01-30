import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase.js';
import logo from './media/login-icon-3048.png';

const Signup = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setSubmitted(true);
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(async (res) => {
                // setSubmitted(false);
                await updateProfile(res.user, {
                    displayName: user.name,
                });
                navigate('/login');
            }).catch((err) => {
                // console.log(err);
                setError(err.message);
                setSubmitted(false);
            })
    };


    return (
        <div className='signup'>
            <div id="logo"><img src={logo} alt='' /></div>
            <div className="signup_body">
                <form className='form_signup' onSubmit={handleClick}>
                    <h3>Name:</h3>
                    <input type='text'
                        value={user.name}
                        required
                        onChange={(e) =>
                            setUser((u) => ({ ...u, name: e.target.value }))
                        }
                    />
                    <h3>Email:</h3>
                    <input type='text'
                        value={user.email}
                        required
                        onChange={(e) =>
                            setUser((u) => ({ ...u, email: e.target.value }))
                        }
                    />

                    <h3>Password:</h3>
                    <input type='text'
                        value={user.password}
                        required
                        onChange={(e) =>
                            setUser((u) => ({ ...u, password: e.target.value }))
                        }
                    />
                    <button className='signup_button' onClick={handleClick} disabled={submitted}>Sign up</button>
                </form>
            </div>
            <div className='have_account'>
                {error && alert(`${error.message}`)}
                <p>Already have an account?</p>
                <div><Link to='/login'>Login</Link></div>
            </div>
        </div>
    );


}

export default Signup;