import React from 'react';
import classes from './Star.module.css';

const star = (props) => {
    return (
        <div className={classes.Star}>
            {'\u2606'}
        </div>
    );
};

export default star;