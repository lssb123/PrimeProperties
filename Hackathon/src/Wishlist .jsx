import React from "react";
import { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-2xl"
          onClick={removeFromWishlist}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Wishlist</h2>
        <div className="space-y-4">
          {wishlist.length === 0 ? (
            <p className="text-center">No properties in wishlist.</p>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="border p-4 rounded-md shadow-sm">
                <img
                  src={item.Siteimage}
                  alt="Property"
                  className="w-full h-48 object-cover mb-2 rounded"
                />
                <h3 className="text-lg font-semibold">{item.PropertyType}</h3>
                <p>City: {item.city}</p>
                <p>Price: {item.ExpectedPrice}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
