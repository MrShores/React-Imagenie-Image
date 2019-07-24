import React from 'react';
import classes from './DetailsInfo.module.css';
import Numbers from './Numbers';
import { Spring } from 'react-spring/renderprops';

const detailsInfo = (props) => {

    const image = props.image;

    return (
        <Spring
            from={{
                opacity: props.show ? 0 : 1,
                bottom: props.show ? '-100px' : '0'}}
            to={{
                opacity: props.show ? 1 : 0,
                bottom: props.show ? '0' : '-100px'}}>
            {props => (
                <div className={classes.DetailsInfo} style={props}>
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