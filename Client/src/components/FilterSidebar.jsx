import React, { useState } from "react";

const FilterSidebar = ({ filteredProperties, setFilteredProperties, properties }) => {
  const [price, setPrice] = useState(500);
  const [bedrooms, setBedrooms] = useState(3);
  const propertyTypeArray = ["Single-Family-Home", "Multi-Family", "Apartment", "Condo", "Commercial", "Loft", "Land"];
  const [propertyTypes, setPropertyTypes] = useState([...propertyTypeArray]);


  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    // setPropertyTypes([...propertyTypeArray]);
    if(!propertyTypes.includes(event.target.value)){
      setPropertyTypes([...propertyTypes, event.target.value]);
    }
    else{
      setPropertyTypes(propertyTypes.filter((type) => (type !== event.target.value)));
    }
    console.log("propertyTypes: ",propertyTypes);
  };

  const handleClearFilters = (e) => {
    e.preventDefault();
    setPrice(500);
    setBedrooms(3);
    setPropertyTypes([...propertyTypeArray]);
    setFilteredProperties(properties);
    document.querySelectorAll('input').forEach((field) => field.checked = true);
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    const filter = properties.filter((property) => {
      const matchedPrice = property.price >= price;
      const matchedBed = property.beds >= bedrooms;
      const matchedType = propertyTypes.includes(property.propertyType);
      // console.log()
      return matchedPrice && matchedBed && matchedType;
    })
    console.log("filtering: ",filter);
    setFilteredProperties(filter);
    console.log("filter: ",filteredProperties);
  };

  return (
    <aside className="filter-sidebar">
      <h3>Filter by</h3>
      <div className="filter-section">
        <h4 className="font-extrabold">Property Type</h4>
        <ul>
          {propertyTypeArray.map((type, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={type}
                defaultChecked={type}
                value={type}
                onChange={handlePropertyTypeChange}
                className="border-1"
              />
              <label htmlFor={type}>
                {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-section">
        <h4>Price Range</h4>
        <input
          type="range"
          min="0"
          max="10000000"
          value={price}
          className="slider"
          id="price-range"
          onChange={handlePriceChange}
        />
        <div className="range-values">
          <span>${price}</span>
          <span>$1,000,0000</span>
        </div>
      </div>
      <div className="filter-section">
        <h4>Bedrooms</h4>
        <input
          type="range"
          min="1"
          max="5"
          value={bedrooms}
          className="slider"
          id="bedrooms-range"
          onChange={handleBedroomsChange}
        />
        <div className="range-values">
          <span>{bedrooms}</span>
          <span>5</span>
        </div>
      </div>
      <div className="filter-actions flex gap-2">
        <button
          className="bg-blue-500 px-4  rounded-lg font-bold text-white"
          onClick={handleClearFilters}
        >
          Clear Filters
        </button>
        <button
          className="bg-blue-500 px-4 rounded-lg font-bold text-white"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;
