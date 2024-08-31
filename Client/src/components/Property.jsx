import React, { useCallback, useEffect, useState } from "react";
import "./Property.css";

import Header from "./Header";
import PropertyListing from "./PropertyListing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);


  const fetchProperties = useCallback(async() => {
    try {
      const response = await axios.get('https://localhost:1218/api/properties');
      console.log(response.data);
      setProperties(response.data.properties);
      setFilteredProperties(response.data.properties);
    } catch (error) {
      console.log("Room: ",error);
    }
  }, [properties]) 
  useEffect(() => {
    fetchProperties();
    console.log("prope",properties);
    
  }, [])
  return (
    <div>
      <Header properties={properties} filteredProperties={filteredProperties} setFilteredProperties={setFilteredProperties}/>
      <PropertyListing properties={properties} filteredProperties={filteredProperties} setFilteredProperties={setFilteredProperties}/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Property;
