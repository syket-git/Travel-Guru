import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { searchData } from '../../utils/searchData';
import SearchBox from '../../Components/SearchBox/SearchBox';
import moment from 'moment';
import Map from '../../Components/Map/Map';

const Search = () => {
  //Get item in localStorage

  const book = localStorage.getItem('startBooking');
  const finalBook = book !== null && JSON.parse(book);

  console.log(finalBook);

  const item = localStorage.getItem('selectedItem');
  const selectedItem = item !== null && JSON.parse(item);

  const finalData = searchData.filter(
    (data) => data.slug === selectedItem.slug
  );

  const center = finalData[0].location;

  return (
    <div className="search">
      <div className="container">
        <section>
          <Navbar />
        </section>
        <hr />
        <div className="row">
          <div className="col-xl-6">
            <h5 className="text-left">
              Stays in{' '}
              <span className="font-weight-bold">{selectedItem.name}</span>
            </h5>
            <p className="text-left">
              ({finalData?.length}) results . {finalBook?.origin} to{' '}
              {selectedItem.name} . {moment(finalBook?.from).format('MMM Do')}{' '}
              to {moment(finalBook?.to).format('MMM Do')}
            </p>
            {finalData?.length > 0 ? (
              finalData?.map((data, i) => <SearchBox key={i} data={data} />)
            ) : (
              <p>We couldn't find any data</p>
            )}
          </div>
          <div className="col-xl-6 mt-5">
            <Map data={finalData} center={center} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
