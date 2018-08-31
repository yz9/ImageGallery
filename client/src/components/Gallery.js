import React, { Component } from 'react';
import axios from 'axios';
import GalleryImage from './GalleryImage';
import { ACCESS_KEY } from '../configs/keys';
import { TYPE, NUM, THUMBNAIL_SIZE } from '../configs/imageConfig';

class Gallery extends Component {

  state = {
    imgUrls: []
  }

  componentDidMount() {
    const { imgUrls } = this.state;
    if (imgUrls.length === 0) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const imageUrls = [];
    const URL = `https://api.unsplash.com/photos/${TYPE}?client_id=${ACCESS_KEY}&count=${NUM}&orientation=landscape&w=${THUMBNAIL_SIZE}&h=${THUMBNAIL_SIZE}`;
    axios
      .get(URL)
      .then(res => {
        res.data.map((img, index) => imageUrls.push({ id: index, url: img.urls.custom }));
        this.loadImages(imageUrls);
      })
      .catch(e => console.log(e));
  }

  loadImages = (imageUrls) => {
    this.setState({
      imgUrls: [...imageUrls]
    });
  }

  removeImage = (id) => {
    this.setState(state => ({
      imgUrls: state.imgUrls.filter(img => img.id !== id)
    }));
  }


  render() {

    const { imgUrls } = this.state;

    return (
      <section className='gallery-container'>
        {
          imgUrls.map(img => (
            <div className='gallery-item' key={img.id}>
              <GalleryImage src={img.url} alt={'image ' + img.id} />
              <button type="button" className="remove-btn btn btn-outline-danger" onClick={() => this.removeImage(img.id)}>&times;</button>
            </div>
          ))
        }

      </section>
    )
  }
}

export default Gallery;