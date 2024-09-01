import React from 'react';
import "./gallery.css";

// Import images from assets
import indoorPlants from './assets/indoor-plants.jpg';
import outdoorPlants from './assets/outdoor-plants.jpg';
import floweringShrubs from './assets/flowering-shrubs.jpg';
import succulents from './assets/succulents.jpg';
import herbs from './assets/herbs.jpg';

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2 className="gallery-heading">Our Top Categories</h2>
      <div className="container">
        <div className="item">
          <img src={indoorPlants} alt="Indoor Plants" />
          <div className="text-overlay">
            <h2>Indoor Plants</h2>
          </div>
          <button className="btn btn-green btn-hover-effect">
            <span className="btn-text">Shop Now</span>
          </button>
        </div>
        <div className="item">
          <img src={outdoorPlants} alt="Outdoor Plants" />
          <div className="text-overlay">
            <h2>Outdoor Plants</h2>
          </div>
          <button className="btn btn-green btn-hover-effect">
            <span className="btn-text">Shop Now</span>
          </button>
        </div>
        <div className="item">
          <img src={floweringShrubs} alt="Flowering Shrubs" />
          <div className="text-overlay">
            <h2>Flowering Shrubs</h2>
          </div>
          <button className="btn btn-green btn-hover-effect">
            <span className="btn-text">Shop Now</span>
          </button>
        </div>
        <div className="item">
          <img src={succulents} alt="Succulents" />
          <div className="text-overlay">
            <h2>Succulents</h2>
          </div>
          <button className="btn btn-green btn-hover-effect">
            <span className="btn-text">Shop Now</span>
          </button>
        </div>
        <div className="item">
          <img src={herbs} alt="Herbs" />
          <div className="text-overlay">
            <h2>Herbs</h2>
          </div>
          <button className="btn btn-green btn-hover-effect">
            <span className="btn-text">Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
