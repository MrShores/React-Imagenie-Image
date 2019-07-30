import React from 'react';
import classes from './Info.module.css';
import Numbers from './Numbers';
import { Spring } from 'react-spring/renderprops';
import { easeCubicOut } from 'd3-ease';

const imageInfo = (props) => {
    
    const image = props.image;

    const btnClasses = props.favorite
        ? [classes.Favorite, classes.IsFavorite]
        : [classes.Favorite]

    const favText = props.favorite
        ? '\u2605 Remove'
        : '\u2606 Favorite';

    return (
        <Spring
            from={{bottom: props.show ? '-108px' : '0'}}
            to={{bottom: props.show ? '0' : '-108px'}}
            config={{duration: props.duration, easing: easeCubicOut}}>
            {styles => (
                <div className={classes.Info} style={styles}>
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
            )}
        </Spring>            
    );
};

export default imageInfo;