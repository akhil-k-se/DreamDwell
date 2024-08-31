import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import FilterSidebar from "./FilterSidebar";
import axios from "axios";

function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Fetch properties from API or local data
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:1218/api/properties"); // Example API endpoint
        setProperties(response.data);
        setFilteredProperties(response.data); // Initially, show all properties
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="property-listing flex">
      {/* FilterSidebar */}
      <FilterSidebar 
        properties={properties} 
        setFilteredProperties={setFilteredProperties} 
      />
      
      {/* Property Cards */}
      <div className="w-full p-4">
        <h1 className="visually-hidden">Property Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))
          ) : (
            <p>No properties match your criteria.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PropertyListing;
