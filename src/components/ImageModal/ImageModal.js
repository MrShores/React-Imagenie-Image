import React, { Component } from 'react';
import classes from './ImageModal.module.css';
import ImageDetails from './Modal/ImageDetails';
import Aux from '../../hoc/Auxiliary';

class ImageModal extends Component {

    render() {

        const image = this.props.image;
        const isFavorite = this.props.favorites.includes(image.id);

        return (
            <Aux>
                <div className={classes.ImageModalWrap}
                    onClick={this.props.closeClick}></div>
                <div className={classes.ImageModal}>
                    <img className={classes.Photo} src={image.images.thumb} alt="" />
                    <ImageDetails
                        image={image}
                        closeClick={this.props.closeClick}
                        favorite={isFavorite}
                        favoriteClick={this.props.favoriteClick} />
                </div>
            </Aux>
        );
    }
};

export default ImageModal;