import React from 'react';
import classes from './Info.module.css';
import Numbers from './Numbers';

const imageInfo = (props) => {
    
    const image = props.image;

    const btnClasses = props.favorite
        ? [classes.Favorite, classes.IsFavorite]
        : [classes.Favorite]

    const favText = props.favorite
        ? '\u2605 Unfavorite'
        : '\u2606 Favorite';

    return (
        <div className={classes.Info}>
            <h3>{image.name}</h3>
            <a className={classes.At}
                href={`https://unsplash.com/${image.at}`}
                target="_blank" rel="noopener noreferrer">
                {image.at}
            </a>
            <Numbers
                views={image.views}
                downloads={image.downloads} />
            <button
                className={btnClasses.join(' ')}
                onClick={() => props.favoriteClick(image.id)}>
                    {favText}
            </button>
        </div>
    );
};

export default imageInfo;