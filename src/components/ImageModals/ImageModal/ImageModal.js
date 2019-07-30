import React, { Component } from 'react';
import classes from './ImageModal.module.css';
import { Transition, Spring } from 'react-spring/renderprops';
import { easeCubicOut } from 'd3-ease';
import Info from './Info';


class ImageModal extends Component {

    state = {
        animatingOut: false,
        durationBase: 350,
    }

    /* Handlers
    -------------------------------------------------------------------------*/

    closeHandler = (duration) => {
        this.setState({animatingOut: true});
        this.props.closeClick(this.props.image.id, duration);
    }

    
    /* Methods
    -------------------------------------------------------------------------*/

    getDuration = (start, end) => {
        if( start === {} || end === {} ){
            return this.state.duration;
        } else {
            const rate = 1.8;
            const centStart = this.getCenter(start);
            const centEnd = this.getCenter(end);
            const x = Math.abs(centStart[0] - centEnd[0]);
            const y = Math.abs(centStart[1] - centEnd[1]);
            const h = Math.sqrt(x**2 + y**2);
            const time = Math.ceil(h / rate);
            return this.state.durationBase + time;
        }
    }

    getCenter = (box) => {
        const x = box.left + (box.width / 2);
        const y = box.top + (box.height / 2);
        return [x, y]
    }

    /* Render
    -------------------------------------------------------------------------*/

    render() {

        const show = !this.state.animatingOut && this.props.show;
        
        /**
         * Get values for FLIP animation for .ImageModal <div>
         */
        let node = null;
        let start = {};
        let end = {};
        let leave = [];
        const padding = this.props.winWidth < 1000 ? 10 : 15;

        if( this.props.node !== null ){
            node = this.props.node.getBoundingClientRect();
            start = {
                left: node.x + padding,
                top: node.y + padding,
                width: node.width - padding * 2,
                height: node.height - padding * 2,
                boxShadow: '0 2px 5px -2px rgba(0,0,0,0.5)',
            };
            end = {
                left: (this.props.winWidth - 400) / 2,
                top: (this.props.winHeight - 266) / 2 - 25,
                width: 400,
                height: 266,
                boxShadow: '0 12px 20px 0px rgba(0,0,0,0.6)',
            };
            leave = {...start, boxShadow: '0 2px 5px -2px rgba(0,0,0,0.0)'};
        }

        const duration = this.getDuration(start, end);

        return (
            <Transition
                items={show}
                from={start}
                enter={end}
                leave={leave}
                config={{duration: duration, easing: easeCubicOut}}>
                {isShow => isShow && (styles => (
                    <div className={classes.ImageModal} style={styles}>
                        <img src={this.props.image.images.thumb} alt="" />

                        <Info
                            show={show}
                            image={this.props.image}
                            duration={duration}
                            favorite={this.props.favorite}
                            favoriteClick={this.props.favoriteClick} />

                        <Spring
                            from={{opacity: show ? 0 : 1 }}
                            to={{opacity: show ? 1 : 0 }}
                            config={{duration: duration - 200, easing: easeCubicOut}}>
                            {styles => (
                                <button className={classes.Close} style={styles}
                                    onClick={() => this.closeHandler(duration)}>Close</button>
                            )}
                        </Spring>
                    </div>
                ))}
            </Transition>
        );
    }
};

export default ImageModal;