import React, { Component } from 'react';
import classes from './Image.module.css';

class Image extends Component {

    render(){
        return (
            <div
                className={classes.Image}
                onClick={() => this.props.click(this.props.id)}>
                <img src={this.props.thumb} alt="" />
            </div>
        );
    }
};

export default Image;