import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate hook for navigation
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Firebase modular imports

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth(); // Initialize Firebase auth

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setErrorMsg('');
        setSuccessMsg('Login Successful. Redirecting to Home...');
        setTimeout(() => {
          navigate('/'); // Navigate to home page after successful login
          setSuccessMsg('');
        }, 3000);
      })
      .catch((err) => setErrorMsg(err.message)); // Catch and display any errors
  };

  return (
    <div className="container">
      <br />
      <br />
      <h1>Login</h1>
      <hr />
      {successMsg && (
        <>
          <div className="success-msg">{successMsg}</div>
          <br />
        </>
      )}
      <form className="form-group" autoComplete="off" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <div className="btn-box">
          <span>
            Don't have an account? SignUp{' '}
            <Link to="/signup" className="link">
              Here
            </Link>
          </span>
          <br />
          <button type="submit" className="btn btn-success btn-md">
            Login
          </button>
        </div>
      </form>
      {errorMsg && (
        <>
          <br />
          <div className="error-msg">{errorMsg}</div>
        </>
      )}
    </div>
  );
};

export default Login;
