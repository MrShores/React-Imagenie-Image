import React from 'react';
import classes from './Favorite.module.css';
import { animated } from 'react-spring/renderprops';

const favorite = (props) => {
    return (
        <animated.div className={classes.Favorite}
            key={props.image.id}
            style={props.style}>
            <img src={props.image.images.thumb} alt="" />
            <div>
                <h3>{props.image.name}</h3>
                <a className={classes.At}
                    href={`https://unsplash.com/${props.image.at}`}
                    target="_blank" rel="noopener noreferrer">
                    {props.image.at}
                </a>
                <button onClick={() => props.favoriteClick(props.image.id)}>
                    &times;</button>
            </div>
        </animated.div>
    );
};

export default favorite;