import React, { useState } from 'react';

import './RegisterPage.css';

function RegisterPage() {

    //insert code here to create useState hook variables for firstName, lastName, email, password
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // insert code here to create handleRegister function and include console.log
    const handleRegister = async () => {
        console.log("Register invoked")
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
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