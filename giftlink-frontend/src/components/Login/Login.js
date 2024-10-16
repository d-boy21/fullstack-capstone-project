import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // insert code here to create handleLogin function and include console.log
    const handleLogin = async () => {
        console.log("Inside handleLogin");
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