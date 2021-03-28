import React from 'react';
import './Home.css';
//Components
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="home">
      <div className="home__overlay">
        <div className="container">
          <section>
            <Navbar color="white" />
          </section>
        </div>
      </div>
    </div>
  );
};
export default Home;
