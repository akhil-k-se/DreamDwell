import React from 'react';

const PropertyCard = ({ property }) => {
  const handleChatClick = () => {
    alert(`Opening the property`);
    // Implement chat logic here
  };

  return (
    <div className="property-card">
      <img src={property.image} alt="Property Image" />
      <div className="property-info">
        <h2>{property.price}</h2>
        <p>{property.propertyType}</p>
        <p>{property.beds}</p>
        <p>{property.location}</p>
        <button className="chat-agent" onClick={handleChatClick}>Buy Now</button>
      </div>
    </div>
  );
};

export default PropertyCard;
