import React from 'react';
import classes from './Background.module.css';

const background = (props) => {

    const cssClasses = [classes.Background];
    switch( props.color ){
        case 'purple':
            cssClasses.push(classes.Purple);
            break;
        default:
            // pass
            break;
    }

    return (
        <div className={cssClasses.join(' ')}
            onClick={props.click}></div>
    );
}

export default background;