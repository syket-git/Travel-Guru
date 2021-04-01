import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

//Components
import Navbar from '../../Components/Navbar/Navbar';

// Destination Data
import { destination } from '../../utils/destinationData';

const Home = () => {
  //State
  const [destinationDetails, setDestinationDetails] = useState(destination[0]);

  let history = useHistory();

  const handleBooking = (item) => {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    history.push(`/book/${item.slug}`);
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
            {/* For Laptop Screen */}

            <div className="row home__destination laptop">
              <div className="col-xl-5 col-md-12">
                <div className="home__destination-description">
                  <h1>{destinationDetails?.name}</h1>
                  <p>{destinationDetails?.description}</p>
                  <button
                    onClick={() => handleBooking(destinationDetails)}
                    className="home__destination-description-button"
                  >
                    Booking
                  </button>
                </div>
              </div>
              <div className="col-xl-7 col-md-12">
                <div className="home__destination-display">
                  {destination?.length > 0 &&
                    destination?.map((dest, i) => (
                      <div
                        key={i}
                        onClick={() => setDestinationDetails(dest)}
                        className={`home__destination-display-item ${
                          destinationDetails.slug === dest.slug &&
                          'home__destination-display-item-active'
                        }`}
                      >
                        <img
                          className="img-fluid"
                          src={dest?.image}
                          alt={dest?.name}
                        />
                        <div className="home__destination-display-item-overlay"></div>
                        <h4>{dest?.name}</h4>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* For Mobile Screen */}

            <div className="home__destination mobile">
              <div className="home__destination-display">
                {destination?.length > 0 &&
                  destination?.map((dest, i) => (
                    <div
                      key={i}
                      style={{ flex: '0 1 200px', marginRight: '10px' }}
                    >
                      <div
                        onClick={() => setDestinationDetails(dest)}
                        className={`home__destination-display-item ${
                          destinationDetails.slug === dest.slug &&
                          'home__destination-display-item-active'
                        }`}
                      >
                        <img
                          className="img-fluid"
                          src={dest?.image}
                          alt={dest?.name}
                        />
                        <div className="home__destination-display-item-overlay"></div>
                        <h4>{dest?.name}</h4>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="col-md-12">
                <div className="home__destination-description">
                  <h1>{destinationDetails?.name}</h1>
                  <p>{destinationDetails?.description}</p>
                  <button
                    onClick={() => handleBooking(destinationDetails)}
                    className="home__destination-description-button"
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Home;
