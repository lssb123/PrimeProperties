import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookies'
function Wish({  data=[]  }) {
    const [wish,setWish]=useState([])
    useEffect(() => {
        setWish(data);
      }, [data]);
const fetchWishlistData = async () => {
    try {
        const email = localStorage.getItem('email');
        if (email) {
            const response = await axios({
                url: `http://localhost:3001/protected/wishlistData/${email}`,
                method: 'get',
                headers: {
                    authorization: Cookies.getItem('token') // Use Cookies.get() for correct package
                }
            });
            setWish(response.data);
        }
    } catch (error) {
        console.error('Error fetching wishlist data:', error);
        toast.error('Failed to fetch wishlist data');
    }
};
    const handleRemove=(id)=>{
          
        axios({
             url:`http://localhost:3001/protected/removeCart/${id}`,
             method:"get",
             headers:{
                authorization:Cookies.getItem('token')
             }
        }).then(async res=>{
            console.log(res.data.message) 
            if(res.data.message === 'Property removed from the wishlist')
            {
                 await fetchWishlistData()
            }
            toast.success("item removed from the wishlist")
        })
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {
         
    
      Array.isArray(wish) && wish.length > 0 ? (
        wish.map((item) => (
          <div
            key={item.id}
            className="bg-gray-500 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.Siteimage || 'default-image.jpg'} // Fallback image if Siteimage is missing
              alt={`Image of ${item.PropertyType}`} // More descriptive alt text
              className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <p className="text-lg font-bold text-gray-800 text-white">
                Property Type: {item.PropertyType || 'N/A'}
              </p>
              <p className="text-gray-600 text-white">
                Property City: {item.city || 'N/A'}
              </p>
              <p className="text-gray-600 text-white">
                Property Price: {item.ExpectedPrice || 'N/A'}
              </p>

              <button className='bg-red-200 rounded p-2 text-blue-900' onClick={()=>handleRemove(item.PropertyId)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-blue-900 text-center"> Wishlist is empty</p>
      )
}
    </div>
  );
}
 
export default Wish;

 
  