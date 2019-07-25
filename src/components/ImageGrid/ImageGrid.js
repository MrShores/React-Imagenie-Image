import React from 'react';
import classes from './ImageGrid.module.css';
import Image from './Image';

const imageGrid = (props) => {

    const images = props.images.map((image, index) => {
        return (
            <Image
                key={image.id}
                id={image.id}
                hide={image.id === props.activeImageID}
                thumb={image.images.thumb}
                click={props.imageClick}
                imageVisible={props.imageVisible} />
        );
    });

    return (
        <div className={classes.ImageGrid}>
            {images}
        </div>
    );
};

export default imageGrid;