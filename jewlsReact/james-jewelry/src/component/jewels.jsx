import React from 'react';
import './JewelryGuide.css';
import { Link } from 'react-router-dom';

const jewleryCard = ({ jewlery: { jID, price, image, Name} }) => {
  return (
    <div className="jewelry-guide" key={jID}>
      <div>
        <h2>{Name}</h2>
      </div>

      <div>
        <Link to={`/jewelry/${jID}`}>
        <img src={image !== "N/A" || null ? image : "https://static.vecteezy.com/system/resources/previews/006/059/989/non_2x/crossed-camera-icon-avoid-taking-photos-image-is-not-available-illustration-free-vector.jpg"} 
        alt={Name} 
        style={{ cursor: 'pointer' }}
        />
      </Link>
      </div>

      <div>
        <span>{price}</span>
      
      </div>
    </div>
  );
}

export default jewleryCard;