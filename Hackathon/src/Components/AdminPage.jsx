import React, { useEffect, useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import AdminNav from './AdminNav';
import axios from 'axios';

const AdminPage = () => {
    const [dataH,setDataH] = useState(0);
    const [dataL,setDataL] = useState(0);
    const [dataA,setDataA] = useState(0);
    const data = [
        { id: 0, value: dataH, label: 'Houses' },
        { id: 1, value: dataL, label: 'Lands' },
        { id: 2, value: dataA, label: 'Apartments' },
      ];

    const [adminData, setAdminData] = useState([]);
    const [datalen, setDataLen] = useState(false);
    useEffect(() => {
        axios({
            url: "http://localhost:3001/User/admindashboard",
            method: "get"
        }).then((res)=> {
            setAdminData(res.data.properties)
            console.log(res.data.properties)
            if (res.data.properties) {
                setDataLen(false); // Data is fetched, hide "No data Found" message
              } else {
                setDataLen(true); // No data found, show "No data Found" message
              }
        }).catch((err)=> {
            console.log(err)
        })

        axios({
            url: "http://localhost:3001/User/data",
            method: "get"
        }).then((res)=> {
            setDataL(res.data.v1)
            setDataH(res.data.v2)
            setDataA(res.data.v3)
            // console.log(data)
        }).catch((err)=> {
            console.log(err)
        })

    })
    
  return (
    <>
    <AdminNav/>
    <br />
    {/* <h1>Admin Dashboard</h1> */}
    <center><h1><b>Admin Dashboard</b></h1></center><br />
        <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    <br />
    <center><h1><b>Waiting for your approval</b></h1></center>
    <div className="grid grid-cols-4 gap-x-4 gap-y-8 place-items-stretch mt-8">
        {datalen ? (
          <div className="col-span-4 text-center text-red-600 text-xl">
            No data found
          </div>
        ) : (
          adminData.map((item) => (
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
      <br />
    </>
  )
}

export default AdminPage