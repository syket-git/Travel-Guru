import React from 'react';
import GoogleMapReact from 'google-map-react';
require('dotenv').config();

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      fontSize: '16px',
      backgroundColor: 'black',
      color: 'white',
      width: 'fit-content',
      padding: '5px',
      borderRadius: '30px',
    }}
  >
    ${text}
  </div>
);

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
          {data.map((dt) => (
            <AnyReactComponent
              lat={dt.location.lat}
              lng={dt.location.lng}
              text={dt.amount}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default Map;
