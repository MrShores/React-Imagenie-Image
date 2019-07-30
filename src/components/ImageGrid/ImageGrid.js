import React from 'react';
import classes from './ImageGrid.module.css';
import Image from './Image';

const imageGrid = (props) => {

    const images = props.images.map((image, index) => {
        return (
            <Image
                key={image.id}
                image={image}
                active={props.activeImages.includes(image.id)}
                favorite={props.favorites.includes(image.id)}
                click={props.imageClick}
                imageMount={props.imageMount} />
        );
    });

    return (
        <div className={classes.ImageGrid}>
            {images}
        </div>
    );
};

export default imageGrid;