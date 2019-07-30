import React, { Component } from 'react';
import ImageModal from './ImageModal/ImageModal';

class ImageModals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        };
        this.getWindowDimensions = this.getWindowDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.getWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getWindowDimensions);
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if( this.props.activeImageModals !== nextProps.activeImageModals ||
            this.props.favorites !== nextProps.favorites){
            return true;
        }
        return false;
    }

    /* Methods
    -------------------------------------------------------------------------*/

    getWindowDimensions() {
        this.setState({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        });
    }

    /* Render
    -------------------------------------------------------------------------*/

    render() {
        const modals = this.props.images.map((image, index) => {
            const show = this.props.activeImageModals.includes(image.id);
            const isFav = this.props.favorites.includes(image.id);
            if( show ){
                return (
                    <ImageModal
                        key={image.id}
                        show={show}
                        image={image}
                        favorite={isFav}
                        node={this.props.imageNodes[image.id]}
                        winWidth={this.state.winWidth}
                        winHeight={this.state.winHeight}
                        closeClick={this.props.closeClick}
                        favoriteClick={this.props.favoriteClick} />
                );
            }
            return null;
        });

        return (
            <div className="ImageModals">
                {modals}
            </div>
        );
    }
};

export default ImageModals;