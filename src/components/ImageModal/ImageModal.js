import React, { Component } from 'react';
import classes from './ImageModal.module.css';
import Background from '../UI/Background/Background';
import Modal from './Modal/Modal';
import { Spring, animated } from 'react-spring/renderprops';

class ImageModal extends Component {

    render() {

        const isFavorite = this.props.favorites.includes(this.props.image.id);

        const from = {
            transform: 'translate(-50%, -50%) scale(0.9)',
        };

        const to = {
            transform: 'translate(-50%, -50%) scale(1)',
        };

        return (
            <animated.div className={classes.ImageModalWrap} style={this.props.style}>

                <Background
                    color="purple"
                    click={this.props.closeClick} />

                <Spring
                    from={this.props.show ? from : to}
                    to={this.props.show ? to : from}
                    native>
                    {style => (
                        <Modal
                            style={style}
                            image={this.props.image}
                            favorite={isFavorite}
                            favoriteClick={this.props.favoriteClick}
                            closeClick={this.props.closeClick} />
                    )}
                </Spring>

            </animated.div>
        );
    }
};

export default ImageModal;