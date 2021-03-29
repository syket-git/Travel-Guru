import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Book.css';

const Book = () => {
  const stringifyData = localStorage.getItem('selectedItem');
  const data = JSON.parse(stringifyData);

  //Get Auth Token
  const auth_user_token = localStorage.getItem('auth_user_token');
  //Get Selected Item
  const item = localStorage.getItem('selectedItem');
  const selectedItem = item !== null && JSON.parse(item);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    data.destination = selectedItem !== null && selectedItem.name;
    data.slug = selectedItem !== null && selectedItem.slug;
    console.log(data);
  };

  return (
    <div className="home">
      <div className="home__overlay">
        <div className="container">
          {/* Navbar  */}
          <section>
            <Navbar color="white" />
          </section>
          {/* Content */}
          <section>
            <div className="row home__destination">
              <div className="col-md-5">
                <div className="home__destination-description">
                  <h1>{data?.name}</h1>
                  <p>{data?.description}</p>
                </div>
              </div>
              <div className="col-md-7 d-flex justify-content-end">
                <div className="book__wrapper">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="origin">Origin</label>
                      <input
                        id="origin"
                        name="origin"
                        type="text"
                        ref={register({ required: true })}
                        placeholder="Origin"
                      />
                      {errors.origin && (
                        <span className="error mt-1 w-100">
                          Origin is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="destination">Destination</label>
                      <input
                        id="destination"
                        name="destination"
                        value={selectedItem.name}
                        readOnly
                        type="text"
                        placeholder="Destination"
                      />
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="form-group">
                        <label htmlFor="destination">From</label>
                        <input
                          id="from"
                          name="from"
                          type="date"
                          ref={register({ required: true })}
                          placeholder="From date"
                        />
                        {errors.from && (
                          <span className="error mt-1">
                            From date is required
                          </span>
                        )}
                      </div>
                      <div className="form-group ml-2">
                        <label htmlFor="destination">To</label>
                        <input
                          id="to"
                          name="to"
                          type="date"
                          ref={register({ required: true })}
                          placeholder="To date"
                        />
                        {errors.from && (
                          <span className="error mt-1">
                            From date is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      {auth_user_token === null ? (
                        <Link to="/login">
                          <button type="submit">Start Booking</button>
                        </Link>
                      ) : (
                        <button type="submit">Start Booking</button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Book;
