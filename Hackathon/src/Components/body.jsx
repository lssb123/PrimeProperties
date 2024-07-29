import axios from "axios";
import Cookies from "js-cookies";
import React, { useState } from "react";
import image from "../assets/ab.jpg";

const Body = () => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [datalen, setDataLen] = useState(false);
  const [details, setDetails] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const formdata = {
      city: city,
      maxPrice: price,
      PropertyType: type,
    };
    console.log(formdata);
    const t = Cookies.getItem("token");
    axios({
      url: "http://localhost:3001/protected/getProperties",
      method: "post",
      headers: {
        authorization: t,
      },
      data: formdata,
    })
      .then((res) => {
        setData(res.data.post);
        if (res.data.post) {
          setDataLen(false);
        } else {
          setDataLen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePress = (item) => {
    setSelectedProperty(item);
    setDetails(true);
  };

  const handleClose = () => {
    setDetails(false);
    setSelectedProperty(null);
  };

  return (
    <div className="pb-20">
      <div
        className="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 opacity-75">
          To reach their assets.
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-8 opacity-75">
          Let's find an asset that's perfect for you.
        </p>

        <div className="w-full max-w-4xl px-4">
          <div className="bg-white bg-opacity-60 p-4 rounded-lg shadow-md">
            <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Enter City"
                className="flex-1 p-3 border border-gray-200 rounded-md placeholder-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter the price"
                className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPrice(e.target.value)}
              />
              <select
                className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Type of Property</option>
                <option value="land">Lands</option>
                <option value="house">Houses</option>
                <option value="apartment">Apartment</option>
              </select>
              <button
                type="submit"
                className="p-3 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-500"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className=" px-5 py-5 grid grid-cols-4 gap-x-4 gap-y-8 place-items-stretch mt-8">
        {datalen ? (
          <div className="col-span-4 text-center text-red-600 text-xl">
            No data found
          </div>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="bg-gray-500 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.Siteimage}
                alt="Property"
                className="rounded-l-lg w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-lg font-bold text-gray-800 text-white">
                  Property Type: {item.PropertyType}
                </p>
                <p className="text-gray-600 text-white">
                  Property City: {item.city}
                </p>
                <p className="text-gray-600 text-white">
                  Property Price: {item.ExpectedPrice}
                </p>
                <button
                  onClick={() => handlePress(item)}
                  className="w-32 h-10 ml-24 bg-gray-800 text-white rounded"
                >
                  View details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {details && selectedProperty && (
        <div className="fixed inset-0 pb-16 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-gray-200 p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              onClick={handleClose}
              className="absolute w-4 top-2 right-2 text-black-600 hover:text-red-700"
            >
              &times;
            </button>
            <img
              src={selectedProperty.Siteimage}
              alt="Property"
              className="rounded w-full h-full object-cover transform transition-transform duration-300 hover:scale-95"

              // className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">
              {selectedProperty.PropertyType}
            </h2>
            <p className="text-gray-700">City: {selectedProperty.city}</p>
            <p className="text-gray-700 ">
              Price: {selectedProperty.ExpectedPrice}
            </p>

            <p className="text-gray-700 ">State: {selectedProperty.state}</p>
            <p className="text-gray-700 ">
              Pin Code: {selectedProperty.pincode}
            </p>
            <p className="text-gray-700 ">
              Location: {selectedProperty.propertyLandmark}
            </p>
            <p className="text-gray-700 ">
              Area(in sq.fts): {selectedProperty.city}
            </p>
            <p className="text-gray-700">Email: {selectedProperty.email}</p>
            <div className="px-28 pt-4 p">
              <button className="bg-gray-800 px-5 text-white p-2 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
