import React, { Component } from 'react';

class GalleryImage extends Component {
  
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt}/>
    )
  }
}

export default GalleryImage;