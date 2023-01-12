import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleClick = async e => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    };
    return (
        <div className='login'>
            <div className="lContainer">
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder='username'
                    title='Username'
                    className='lInput'
                    onChange={handleChange} />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='password'
                    title='Password'
                    className='lInput'
                    onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="lBtn">Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
};

export default Login;