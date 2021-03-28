import React, { useRef } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, errors, handleSubmit, watch, reset } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <Navbar />
      <div className="auth">
        <div className="auth__wrapper">
          <h5>Create an account</h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                ref={register({ required: true })}
                type="text"
                placeholder="First Name"
                name="fname"
              />
              {errors.fname && (
                <span className="error">First Name is required </span>
              )}
            </div>
            <div className="form-group">
              <input
                ref={register({ required: true })}
                type="text"
                placeholder="Last Name"
                name="lname"
              />
              {errors.lname && (
                <span className="error">Last Name is required </span>
              )}
            </div>
            <div className="form-group">
              <input
                ref={register({ required: true })}
                type="email"
                placeholder="Email"
                name="email"
              />
              {errors.email && (
                <span className="error">Email is required </span>
              )}
            </div>
            <div className="form-group">
              <input
                ref={register({
                  required: 'You must specify a password',
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters',
                  },
                })}
                type="password"
                placeholder="Password"
                name="password"
              />
              {errors.password && (
                <span className="error">{errors.password.message} </span>
              )}
            </div>
            <div className="form-group">
              <input
                ref={register({
                  validate: (value) =>
                    value === password.current || 'The passwords do not match',
                })}
                type="password"
                placeholder="Confirm Password"
                name="c_password"
              />
              {errors.c_password && (
                <span className="error">{errors.c_password.message} </span>
              )}
            </div>
            <div className="form-group">
              <button type="submit">Create an account</button>
            </div>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
