import React, { Component } from 'react';
import classes from './DetailsModal.module.css';
import { Transition, Spring } from 'react-spring/renderprops';
// import { easeBounceOut } from 'd3-ease';
import DetailsInfo from './DetailsInfo';
import Aux from '../../hoc/Auxiliary';

class DetailsModal extends Component {

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

    getWindowDimensions() {
        this.setState({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        });
    }

    render() {

        let show = this.props.show;

        // Override show if should doClosing
        if( this.props.doClosing ){
            show = false;
        }

        const image = this.props.image;

        /**
         * Get values for FLIP animation for .Details <div>
         */
        let imageNode = null;
        let start = {};
        let end = {};
        let leave = {};

        const padding = this.state.winWidth < 1000 ? 10 : 15;

        if( this.props.imageNode !== null ){
            imageNode = this.props.imageNode.getBoundingClientRect();

            start = {
                left: imageNode.x + padding,
                top: imageNode.y + padding,
                width: imageNode.width - padding * 2,
                height: imageNode.height - padding * 2,
                boxShadow: '0 2px 5px -2px rgba(0,0,0,0.5)',
            };
            end = {
                left: (this.state.winWidth - 400) / 2,
                top: (this.state.winHeight - 266) / 2 - 25,
                width: 400,
                height: 266,
                boxShadow: '0 12px 20px 0px rgba(0,0,0,0.6)',                
            };
            leave = start;
        }

        return (
            <Transition
                items={show}
                from={start}
                enter={end}
                leave={leave}
                config={{clamp: true}}
                onDestroyed={this.props.onDestroyed}>
                {trans => trans && (props => (
                    <div className={classes.DetailsModal} style={props}>

                        {image !== null ? (
                            <Aux>
                                <img src={image.images.thumb} alt="" />
                                <DetailsInfo
                                    show={show}
                                    image={image}
                                    favoriteClick={this.props.favoriteClick} />
                            </Aux>
                        ) : null}

                        <Spring
                            from={{opacity: show ? 0 : 1}}
                            to={{opacity: show ? 1 : 0}}>
                            {props => (
                                <button
                                    style={props}
                                    className={classes.Close}
                                    onClick={this.props.closeClick}>Close</button>
                            )}
                        </Spring>
                    </div>
                ))}
            </Transition>
        );
    }
};

export default DetailsModal;