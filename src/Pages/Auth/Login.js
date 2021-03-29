import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import google from '../../images/google.svg';
import { handleGoogleLogin } from './auth';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const auth_user = localStorage.getItem('auth_user');
  if (auth_user !== null) {
    return <Redirect from="/login" to="/" />;
  }

  return (
    <div className="container">
      <Navbar />
      <div className="auth pb-5">
        <div className="auth__wrapper">
          <h5>Login</h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                ref={register({ required: true })}
                type="email"
                placeholder="Email"
                name="email"
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className="form-group">
              <input
                ref={register({ required: true })}
                type="password"
                placeholder="Password"
                name="password"
              />
              {errors.password && (
                <span className="error">Password is required</span>
              )}
            </div>

            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <button onClick={handleGoogleLogin} className="googleButton">
          <img
            style={{ width: '30px', marginRight: '10px' }}
            src={google}
            alt="Google"
          />{' '}
          Continue with google
        </button>
      </div>
    </div>
  );
};
export default Login;
