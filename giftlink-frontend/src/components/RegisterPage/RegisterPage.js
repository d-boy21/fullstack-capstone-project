import React, { useState } from 'react';
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import './RegisterPage.css';

function RegisterPage() {

    const navigate = useNavigate();
    const { setIsLoggedIn } = useAppContext();

    //insert code here to create useState hook variables for firstName, lastName, email, password
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    // insert code here to create handleRegister function and include console.log
    const handleRegister = async () => {
        console.log("Register invoked")

            try {
                const response = await fetch(`${urlConfig.backendUrl}/api/${productId}` {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({firstName, lastName, email, password})
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.authtoken) {
                    sessionStorage.setItem('auth-token', data.authtoken);
                    sessionStorage.setItem('namw', data.firstName);
                    sessionStorage.setItem('email', data.email);
                    setIsLoggedIn(true);
                    navigate('/app')
                } else if (data.error) {
                    
                }
                
            } catch (error) {
                setShowerr(error.message);
            }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
                        <div className="text-danger">{showerr}</div>
                        <h2 className="text-center mb-4 font-weight-bold">Register</h2>
                        <div className="form-group mb-4">
                            <label htmlFor="firstName" className="form label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter your first name"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="lastName" className="form label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Enter your last name"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="email" className="form label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>

                        <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>

                        <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )//end of return
}

export default RegisterPage;