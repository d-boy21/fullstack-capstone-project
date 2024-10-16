import React, { useState } from 'react';
import './LoginPage.css';
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [incorrect, setIncorrect] = useState('');

    const navigate = useNavigate();
    const bearerToken = sessionStorage.getItem('bearer-token');
    const { setIsLoggedIn } = useAppContext();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email) {
            setIncorrect('Enter a valid email address');
            return;
        }

        if (!password) {
            setIncorrect('Enter a valid password');
            return;
        }

        const res = await fetch(`${urlConfig.backendUrl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': bearerToken ? `Bearer ${bearerToken}` : '', // Include Bearer token if available
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });

        const json = await res.json();
        console.log('Json', json);
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('name', json.userName);
            sessionStorage.setItem('email', json.userEmail);
            setIsLoggedIn(true);
            navigate('/app');
        } else {
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            setIncorrect(json.error ? json.error : "Wrong password. Try again.");
            setTimeout(() => {
                setIncorrect("");
            }, 2000);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="login-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Login</h2>
                        <div className="form-group mb-4">
                            <label htmlFor="email" className="form label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => {setEmail(e.target.value); setIncorrect('')}}
                                value={email}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="password" className="form label">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                onChange={(e) => {setPassword(e.target.value); setIncorrect('')}}
                                value={password}
                                required
                            />
                            <span style={{color:'red',height:'.5cm',display:'block',fontStyle:'italic',fontSize:'12px'}}>{incorrect}</span>
                        </div>
                        <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
                        <p className="mt-4 text-center">
                            New here? <a href="/app/register" className="text-primary">Register Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;