import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = () => {
  const stringifyData = localStorage.getItem('selectedItem');
  const data = JSON.parse(stringifyData);

  //Get Auth Token
  const auth_user_token = localStorage.getItem('auth_user_token');

  console.log(auth_user_token);

  const [formData, setFormData] = useState({
    origin: '',
    destination: data?.name,
    from: '',
    to: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      origin: '',
      destination: data?.name,
      from: '',
      to: '',
    });
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
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="origin">Origin</label>
                      <input
                        id="origin"
                        name="origin"
                        type="text"
                        value={formData.origin}
                        onChange={(e) =>
                          setFormData({ ...formData, origin: e.target.value })
                        }
                        placeholder="Origin"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="destination">Destination</label>
                      <input
                        id="destination"
                        name="destination"
                        value={formData.destination}
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
                          value={formData.from}
                          onChange={(e) =>
                            setFormData({ ...formData, from: e.target.value })
                          }
                          placeholder="From date"
                        />
                      </div>
                      <div className="form-group ml-2">
                        <label htmlFor="destination">To</label>
                        <input
                          id="to"
                          name="to"
                          type="date"
                          value={formData.to}
                          onChange={(e) =>
                            setFormData({ ...formData, to: e.target.value })
                          }
                          placeholder="To date"
                        />
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
