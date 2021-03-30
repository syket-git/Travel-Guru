import React, { useState, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import useOnClickOutside from '../useOnclickOutside/useOnclickOutside';
require('dotenv').config();

const AnyReactComponent = ({ text, data }) => {
  const ref = useRef();
  const [click, setClick] = useState(false);
  useOnClickOutside(ref, () => setClick(false));
  return (
    <div className="marker__wrapper">
      {click && (
        <div ref={ref} className="marker__info">
          <p>{data.title}</p>

          <div className="d-flex align-items-center justify-content-between">
            <span>
              <span
                style={{
                  color: 'goldenrod',
                  fontSize: '22px',
                  marginRight: '10px',
                }}
              >
                &#9733;
              </span>
              {data.ratings}/5
            </span>
            <span>
              <span className="font-weight-bold">${data.amount}</span>/night
            </span>
          </div>
        </div>
      )}
      <div onClick={() => setClick(!click)} className="marker">
        ${text}
      </div>
    </div>
  );
};

const Map = ({ data, center }) => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          width: '100%',
          borderRadius: '15px',
          overflow: 'hidden',
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAP_KEY}` }}
          defaultCenter={center}
          defaultZoom={17}
        >
          {data.map((dt, i) => (
            <AnyReactComponent
              key={i}
              lat={dt.location.lat}
              lng={dt.location.lng}
              text={dt.amount}
              data={dt}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default Map;
