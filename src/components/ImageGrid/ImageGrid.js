import React, { Component } from 'react';
import classes from './ImageGrid.module.css';
import Image from './Image';

class ImageGrid extends Component {

    render() {
        const images = this.props.images.map((image, index) => {
            return (
                <Image
                    key={image.id}
                    image={image}
                    favorite={this.props.favorites.includes(image.id)}
                    click={this.props.imageClick} />
            );
        });
    
        return (
            <div className={classes.ImageGrid}>
                {images}
            </div>
        );
    }
};

export default ImageGrid;