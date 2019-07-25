import React from 'react';
import classes from './DetailsInfo.module.css';
import Numbers from './Numbers';
import { Spring } from 'react-spring/renderprops';

const detailsInfo = (props) => {

    const image = props.image;

    return (
        <Spring
            from={{bottom: props.show ? '-108px' : '0'}}
            to={{bottom: props.show ? '0' : '-108px'}}>
            {styles => (
                <div className={classes.DetailsInfo} style={styles}>
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
                        className={classes.Favorite}
                        onClick={props.favoriteClick}>
                            Favorite
                    </button>
                </div>
            )}
        </Spring>
    );
};

export default detailsInfo;