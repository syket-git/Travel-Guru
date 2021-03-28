import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="auth">
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
      </div>
    </div>
  );
};
export default Login;
