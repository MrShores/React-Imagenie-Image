import React, { Component } from 'react';
import classes from './Image.module.css';

class Image extends Component {

    /**
     * Create DOM ref to get click x, y,
     * and dimensions of the node
     */
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.hide !== this.props.hide;
    }

    clickHandler = () => {
        this.props.click(this.props.id, this.imageRef);
    }

    render(){

        const cssClasses = this.props.hide
            ? [classes.Image, classes.Hide]
            : [classes.Image];

        return (
            <div className={cssClasses.join(' ')}
                ref={this.imageRef}
                onClick={this.clickHandler}>
                <img src={this.props.thumb} alt="" />
            </div>
        );
    }
};

export default Image;