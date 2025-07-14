import React from 'react';
import { Link } from 'react-router-dom';
import './JewelryGuide.css';
import { useCart } from '../context/CartContext';

const JewleryCard = ({ jewlery }) => {
  const { addToCart } = useCart();

  const { jID, price, image, Name } = jewlery;

  return (
    <div className="jewelry-guide" key={jID}>
      <div>
        <h2>{Name}</h2>
      </div>
      <div>
        <Link to={`/jewelry/${jID}`}>
          <img
            src={image !== "N/A" && image ? image : "https://static.vecteezy.com/system/resources/previews/006/059/989/non_2x/crossed-camera-icon-avoid-taking-photos-image-is-not-available-illustration-free-vector.jpg"}
            alt={Name}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>
      <div>
        <span>{price}</span>
        <button onClick={() => addToCart(jewlery)} style={{ marginLeft: '1rem' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default JewleryCard;