import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GalleryImage extends Component {
  
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} onClick={this.props.onClick}/>
    )
  }
}

GalleryImage.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

export default GalleryImage;