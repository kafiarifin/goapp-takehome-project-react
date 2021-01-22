import React from 'react';
import './styles.scss';
import image from './loading_animation_circle.svg';

export const FullPageLoader = () => (
  <div className="loading-animation">
    <div className="loader-icon">
      <img
        src={image}
        alt="Loading.."
      />
    </div>
  </div>
)
