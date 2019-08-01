import React from 'react';
import classes from './ImageDetails.module.css';
import Info from './Info';
import Aux from '../../../hoc/Auxiliary';

const imageDetails = (props) => {

    const active = props.active;

    return (
        <Aux>
            <Info
                show={active}
                image={props.image}
                favorite={props.favorite}
                favoriteClick={props.favoriteClick} />
        
            <button className={classes.Close}
                onClick={props.closeClick}>Close</button>
        </Aux>
    );
};

export default imageDetails;