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
      url: "http://172.16.102.40:3001/protected/getProperties",
      method: "post",
      headers: {
        authorization: t,
      },
      data: formdata,
    })
      .then((res) => {
        // console.log(res.data.post);
        setData(res.data.post);
        // Check if data is fetched
        if (res.data.post) {
          setDataLen(false); // Data is fetched, hide "No data Found" message
        } else {
          setDataLen(true); // No data found, show "No data Found" message
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePress = (item) => {
    // Handle click action on property item if needed
    console.log("Clicked property:", item);
  };

  return (
    <div>
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

      <div className="grid grid-cols-4 gap-x-4 gap-y-8 place-items-stretch mt-8">
        {datalen ? (
          <div className="col-span-4 text-center text-red-600 text-xl">
            No data found
          </div>
        ) : (
          data.map((item) => (
            <div key={item.id} className="bg-gray-500 rounded-lg shadow-md overflow-hidden">
            <button onClick={() => handlePress(item)} className="w-full h-full">
            <img
            src={item.Siteimage}
            alt="Property"
            className="w-full h-48 object-cover"
            />
            <div className="p-4 " >
            <p className="text-lg font-bold text-gray-800 text-white">
            Property Type: {item.PropertyType}
            </p>
            <p className="text-gray-600 text-white" >Property City: {item.city}</p>
            </div>
            </button>
            </div>
            ))
        )}
      </div>

    </div>
  );
};

export default Body;



{/* <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
{data.map((item) => (
<div key={item.id} className="bg-gray-500 rounded-lg shadow-md overflow-hidden">
<button onClick={() => handlePress(item)} className="w-full h-full">
<img
src={item.Siteimage}
alt="Property"
className="w-full h-48 object-cover"
/>
<div className="p-4 " >
<p className="text-lg font-bold text-gray-800 text-white">
Property Type: {item.PropertyType}
</p>
<p className="text-gray-600 text-white" >Property City: {item.city}</p>
</div>
</button>
</div>
))}
</div> */}