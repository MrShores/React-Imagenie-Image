import React, { Component } from 'react';
import classes from './Modal.module.css';
import Info from './Info';
import { animated } from 'react-spring/renderprops';

class ImageDetails extends Component {

    state = {
        image: this.props.image
    }

    render(){
        return (
            <animated.div className={classes.Modal} style={this.props.style}>
                <img
                    className={classes.Photo}
                    src={this.state.image.images.large} alt="" />
                <Info
                    image={this.state.image}
                    favorite={this.props.favorite}
                    favoriteClick={this.props.favoriteClick} />
                <button
                    className={classes.Close}
                    onClick={this.props.closeClick}>Close</button>
            </animated.div>
        );
    }
};

export default ImageDetails;