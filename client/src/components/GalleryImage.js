import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = (props) => {
    return (
      <img src={props.src} alt={props.alt} onClick={props.onClick}/>
    );
}

GalleryImage.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

export default GalleryImage;
