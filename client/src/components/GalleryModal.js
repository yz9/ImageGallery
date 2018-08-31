import React from 'react';
import PropTypes from 'prop-types';
import { THUMBNAIL_SIZE, REG_WIDTH, REG_HEIGHT } from '../configs/imageConfig';

const GalleryModal = (props) => {

	const url = props.src.slice();
	const largeImage = url
		.replace(`w=${THUMBNAIL_SIZE}`, `w=${REG_WIDTH}`)
		.replace(`h=${THUMBNAIL_SIZE}`, `h=${REG_HEIGHT}`);

	if (!props.visible) return null;
	return (
		<div className='gallery-modal' onClick={props.onClick}>
			<img src={largeImage} alt="" />
		</div>
	)
}

GalleryModal.propTypes = {
	visible: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default GalleryModal;