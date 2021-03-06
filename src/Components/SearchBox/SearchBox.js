import React from 'react';
import './SearchBox.css';

const SearchBox = ({ data }) => {
  return (
    <div className="searchBox">
      <div className="searchBox__wrapper">
        <div className="searchBox__wrapper-img-box">
          <img src={data?.image} alt={data?.title} />
        </div>
        <div className="searchBox__wrapper-information">
          <h6>{data?.title}</h6>
          <p>
            {data.guest} Guests, {data.beds} Beds, {data.bathrooms} Bathrooms,{' '}
            {data.baths} Baths{' '}
          </p>
          <p className="pt-2">{data.description.substr(0, 80)}...</p>
          <div className="pt-2 d-flex align-items-center justify-content-between">
            <p>
              <span
                style={{
                  color: 'goldenrod',
                  fontSize: '22px',
                  marginRight: '10px',
                }}
              >
                &#9733;
              </span>
              {data.ratings} / 5 ({data.totalRatings})
            </p>
            <p>
              <span className="font-weight-bold"> {data.amount}$</span>
              /night
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
