import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JewelryDetail = ({ jewelryList }) => {
  const { id } = useParams();
  const item = jewelryList.find(j => String(j.jID) === id);

  if (!item) {
    return (
      <div>
        <h2>Item not found</h2>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div className="jewelry-guide">
      <h2>{item.Name}</h2>
      <img
        src={item.image !== "N/A" && item.image ? item.image : "https://static.vecteezy.com/system/resources/previews/006/059/989/non_2x/crossed-camera-icon-avoid-taking-photos-image-is-not-available-illustration-free-vector.jpg"}
        alt={item.Name}
        style={{ maxWidth: '300px' }}
      />
      <p>Price: {item.price}</p>
      {/* Add more details here as needed */}
      <Link to="/">Back to list</Link>
    </div>
  );
};

export default JewelryDetail;