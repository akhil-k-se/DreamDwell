import React, { useState } from "react";
import locationIcon from "../assets/location.png";
import userIcon from "../assets/user_4263015.png";
import "./Header.css";
import { ToastContainer, toast } from "react-toastify";

const Header = ({ properties, filteredProperties, setFilteredProperties }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if(event.key === "Enter") {
      handleSearchSubmit();
    }
  }

  const handleSearchSubmit = (event) => {
    if(searchQuery.trim() === "") {
      setFilteredProperties(properties);
    }else{
      setFilteredProperties(filteredProperties.filter((property) => {
        const matchedLocation = property.location === searchQuery;
        return matchedLocation;
      }))
    }
    // event.preventDefault();
    
    
  };

  return (
    <header>
      <div className="flex justify-around w-full">
        <div className="flex">
          <img src={locationIcon} alt="Location Icon" className="icon" />
          <input
            type="text"
            placeholder="Enter the location"
            value={searchQuery}
            className="px-2 rounded-xl"
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#" onClick={() => toast("Navigating to For Sale")}>
                For Sale
              </a>
            </li>
            <li>
              <a href="#" onClick={() => toast("Navigating to For Rent")}>
                For Rent
              </a>
            </li>
            <li>
              <a href="#" onClick={() => toast("Navigating to New Project")}>
                New Project
              </a>
            </li>
            <li>
              <a href="#" onClick={() => toast("Navigating to Sell")}>
                Sell
              </a>
            </li>
            <li>
              <a href="#" onClick={() => toast("Navigating to About")}>
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <span>Hi, Jimmy Sullivan!</span>
          <img src={userIcon} alt="Profile Icon" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
