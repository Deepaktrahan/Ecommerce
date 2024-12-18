import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate import karo
import { auth, fs } from '../Config/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate(); // useNavigate hook ko initialize karo

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(fullName, email, password);

     
  createUserWithEmailAndPassword(auth, email, password)
  .then((credentials) => {
    setDoc(doc(fs, 'users', credentials.user.uid), {
      FullName: fullName,
      Email: email,
      Password: password
    })
      .then(() => {
        setSuccessMsg('Sign Up Successful. You will now automatically get redirected to Login');
        setFullName('');
        setEmail('');
        setPassword('');
        setErrorMsg('');
        setTimeout(() => {
          navigate('/login');
          setSuccessMsg('');
        }, 3000);
      })
      .catch(err => setErrorMsg(err.message));
  })
  .catch(err => setErrorMsg(err.message));

  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1>Sign Up</h1>
      <hr></hr>
      {successMsg && (
        <>
          <div className="success-msg">{successMsg}</div>
          <br></br>
        </>
      )}
      <form
        action=""
        className="form-group"
        autoComplete="off"
        onSubmit={handleSignup}
      >
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        ></input>
        <br></br>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <br></br>
        <div className="btn-box">
          <span>
            Already have an account? Login{' '}
            <Link to="/login" className="Link">
              Here
            </Link>
          </span>{' '}
          <br />
          <button type="submit" className="btn btn-success btn-md">
            Sign Up
          </button>
        </div>
      </form>
      {errorMsg && (
        <>
          <br></br>
          <div className="error-msg">{errorMsg}</div>
        </>
      )}
    </div>
  );
};

export default Signup;
